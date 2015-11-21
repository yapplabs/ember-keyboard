import Ember from 'ember';
import KEY_MAP from 'ember-keyboard/fixtures/key-map';
import listenerName from 'ember-keyboard/utils/listener-name';

const { isPresent } = Ember;
const { Logger: { error } } = Ember;

const keyMapValues = [...KEY_MAP.values()];
const validKeys = keyMapValues.concat(['alt', 'ctrl', 'meta', 'shift']);

const validateKeys = function validateKeys(keys) {
  keys.forEach((key) => {
    if (validKeys.indexOf(key) === -1) {
      error(`\`${key}\` is not a valid key name`);
    }
  });
};

const formattedListener = function formattedListener(type, keysString) {
  const keys = isPresent(keysString) ? keysString.split('+') : [];

  validateKeys(keys);

  return listenerName(type, keys);
};

export function keyDown(keys) {
  return formattedListener('keydown', keys);
}

export function keyUp(keys) {
  return formattedListener('keyup', keys);
}
