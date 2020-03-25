
import Service from '@ember/service';
import { A } from '@ember/array';
import { getOwner } from '@ember/application';
import { get } from '@ember/object';
import { computed } from '@ember/object';
import { bind, run } from '@ember/runloop';
import { keyDown, keyPress, keyUp } from 'ember-keyboard/listeners/key-events';
import {
  handleKeyEventWithPropagation,
  handleKeyEventWithLaxPriorities
} from 'ember-keyboard/utils/handle-key-event';

export default Service.extend({
  isPropagationEnabled: false,

  registeredResponders: null,

  get activeResponders() {
    return this.registeredResponders.filter(r => r.keyboardActivated);
  },

  get sortedRespondersSortDefinition() {
    return this.isPropagationEnabled ?
      ['keyboardPriority'] :
      ['keyboardFirstResponder', 'keyboardPriority']
  },

  get sortedResponders() {
    return this.activeResponders.sortBy(...this.sortedRespondersSortDefinition).reverse();
  },

  get firstResponders() {
    return this.sortedResponders.filter(r => r.keyboardFirstResponder);
  },

  get normalResponders() {
    return this.sortedResponders.filter(r => !r.keyboardFirstResponder);
  },

  init(...args) {
    this._super(...args);

    if (typeof FastBoot !== 'undefined') {
      return;
    }

    const config = getOwner(this).resolveRegistration('config:environment') || {};

    const isPropagationEnabled = Boolean(get(config, 'emberKeyboard.propagation'));
    this.isPropagationEnabled = isPropagationEnabled;
    this.registeredResponders = [];

    this._boundRespond = bind(this, this._respond);
    this._listeners = get(config, 'emberKeyboard.listeners') || ['keyUp', 'keyDown', 'keyPress'];
    this._listeners = this._listeners.map((listener) => listener.toLowerCase());

    this._listeners.forEach((type) => {
      document.addEventListener(type, this._boundRespond);
    });
  },

  willDestroy(...args) {
    this._super(...args);

    if (typeof FastBoot !== 'undefined') {
      return;
    }

    this._listeners.forEach((type) => {
      document.removeEventListener(type, this._boundRespond);
    });
  },

  _respond(event) {
    run(() => {
      if (this.isPropagationEnabled) {
        handleKeyEventWithPropagation(event, { firstResponders: this.firstResponders, normalResponders: this.normalResponders });
      } else {
        handleKeyEventWithLaxPriorities(event, this.sortedResponders);
      }
    });
  },

  register(responder) {
    this.registeredResponders.push(responder);
  },

  unregister(responder) {
    const index = this.registeredResponders.indexOf(responder);
    if (index > -1) {
      this.registeredResponders.splice(index, 1);
    }
  },

  keyDown(...args) {
    return keyDown(...args);
  },

  keyPress(...args) {
    return keyPress(...args);
  },

  keyUp(...args) {
    return keyUp(...args);
  }
});
