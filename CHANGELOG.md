## v6.0.0-beta.1 (2020-06-04)

This release sports new Octane-friendly API. You can see examples and read about the reasons for the API choices in our [API Design doc](https://github.com/adopted-ember-addons/ember-keyboard/blob/master/API-DESIGN.md).

### Upgrading from ember-keyboard 6.0.0-beta.0 to 6.0.0-beta.1

The `keyboard-press` component has been deprecated and replaced with the `on-key` helper. The `on-keyboard` and `keyboard-shortut` modifiers have been deprecated and replaced with the `on-key` modifier. The [deprecations](https://github.com/adopted-ember-addons/ember-keyboard/blob/master/tests/dummy/app/templates/deprecations.hbs) page has more info, along with the 5 to 6 upgrade guide immediately below.

### Upgrading from ember-keyboard 5.x to 6.x

ember-keyboard 6.0.0-beta.1 introduces new APIs to bring ember-keyboard into the Ember Octane era. The old mixins-based API still works but is deprecated in this release and slated for removal in version 7.

Version 6 requires Ember 3.8 or higher, so if you are on a version of Ember before that, you should stick with 5.0.0 until you are able to upgrade your app's Ember version.

If your app is on a recent version of Ember, you are good to go. The path is to upgrade to ember-keyboard 6.x and you can iteratively update to the new APIs until you have no more deprecation warnings left.

The [deprecations](https://github.com/adopted-ember-addons/ember-keyboard/blob/master/tests/dummy/app/templates/deprecations.hbs) page discusses migration paths for each warning you may encounter, but our broader advice is to consider moving as much of your keyboard handling logic to templates as possible. We think that you'll find the `on-key` helper and modifier to be very convenient to work with. The decorator API (which required ember 3.10 or higher) is closest equivalent to the mixins API, but it should be used sparingly in situations where the template approach isn't a good fit.

There is one other potential *breaking* change to be aware of when upgrading from v5 to v6: ember-keyboard versions before 6.0 had an ambiguous API when it came to specifying key combos and required the use of `code` identifiers, like `KeyT`, `Digit1`, etc. Be sure to read the [docs regarding `key` vs. `code` properties](https://github.com/adopted-ember-addons/ember-keyboard/blob/master/tests/dummy/app/templates/usage.hbs) and be sure you are specifying the key combo consistent with your intended behavior. You will likely find that you want to update some key combos to the `key` equivalent. e.g. replace `ctrl+KeyT` with `ctrl+t`.


#### :rocket: :boom: Breaking Change
* [#135](https://github.com/adopted-ember-addons/ember-keyboard/pull/135) New Octane-friendly APIs ([@lukemelia](https://github.com/lukemelia))

#### :memo: Documentation
* [#179](https://github.com/adopted-ember-addons/ember-keyboard/pull/179) Improve readability of docs site ([@lukemelia](https://github.com/lukemelia))

<details>
  <summary>:house: Internal</summary>
* [#180](https://github.com/adopted-ember-addons/ember-keyboard/pull/180) Bump ember-cli-babel from 7.20.4 to 7.20.5 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#178](https://github.com/adopted-ember-addons/ember-keyboard/pull/178) Bump release-it from 13.6.1 to 13.6.2 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#177](https://github.com/adopted-ember-addons/ember-keyboard/pull/177) Bump ember-cli-babel from 7.20.0 to 7.20.4 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#171](https://github.com/adopted-ember-addons/ember-keyboard/pull/171) Bump qunit-dom from 1.1.0 to 1.2.0 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#169](https://github.com/adopted-ember-addons/ember-keyboard/pull/169) Bump eslint from 7.0.0 to 7.1.0 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#166](https://github.com/adopted-ember-addons/ember-keyboard/pull/166) Bump ember-template-lint from 2.4.1 to 2.8.0 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#167](https://github.com/adopted-ember-addons/ember-keyboard/pull/167) Bump ember-compatibility-helpers from 1.2.0 to 1.2.1 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#168](https://github.com/adopted-ember-addons/ember-keyboard/pull/168) Bump markdown-code-highlighting from 0.2.0 to 0.2.1 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#160](https://github.com/adopted-ember-addons/ember-keyboard/pull/160) [Security] Bump tar from 2.2.1 to 2.2.2 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#161](https://github.com/adopted-ember-addons/ember-keyboard/pull/161) [Security] Bump lodash from 4.17.10 to 4.17.15 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#162](https://github.com/adopted-ember-addons/ember-keyboard/pull/162) Bump eslint-plugin-node from 11.0.0 to 11.1.0 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#156](https://github.com/adopted-ember-addons/ember-keyboard/pull/156) [Security] Bump jquery from 3.4.1 to 3.5.1 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#157](https://github.com/adopted-ember-addons/ember-keyboard/pull/157) [Security] Bump lodash.defaultsdeep from 4.6.0 to 4.6.1 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#158](https://github.com/adopted-ember-addons/ember-keyboard/pull/158) [Security] Bump lodash.merge from 4.6.1 to 4.6.2 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#159](https://github.com/adopted-ember-addons/ember-keyboard/pull/159) [Security] Bump mixin-deep from 1.3.1 to 1.3.2 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#155](https://github.com/adopted-ember-addons/ember-keyboard/pull/155) Adopt release-it to help with changelog and release management ([@lukemelia](https://github.com/lukemelia))
* [#154](https://github.com/adopted-ember-addons/ember-keyboard/pull/154) Fix an issue in the keyboard service unit test that left key responders registered ([@lukemelia](https://github.com/lukemelia))
* [#153](https://github.com/adopted-ember-addons/ember-keyboard/pull/153) Bump ember-cli-babel from 7.19.0 to 7.20.0 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#152](https://github.com/adopted-ember-addons/ember-keyboard/pull/152) Bump marked from 0.3.19 to 1.1.0 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#148](https://github.com/adopted-ember-addons/ember-keyboard/pull/148) Bump @babel/plugin-proposal-object-rest-spread from 7.3.1 to 7.9.6 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#141](https://github.com/adopted-ember-addons/ember-keyboard/pull/141) Bump markdown-code-highlighting from 0.2.0 to 0.2.1 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#138](https://github.com/adopted-ember-addons/ember-keyboard/pull/138) Bump eslint from 6.8.0 to 7.0.0 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#142](https://github.com/adopted-ember-addons/ember-keyboard/pull/142) Bump qunit-dom from 1.1.0 to 1.2.0 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#128](https://github.com/adopted-ember-addons/ember-keyboard/pull/128) [Security] Bump lodash.merge from 4.6.1 to 4.6.2 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#136](https://github.com/adopted-ember-addons/ember-keyboard/pull/136) [Security] Bump jquery from 3.4.1 to 3.5.1 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#131](https://github.com/adopted-ember-addons/ember-keyboard/pull/131) Bump ember-cli-github-pages from 0.2.0 to 0.2.2 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#130](https://github.com/adopted-ember-addons/ember-keyboard/pull/130) [Security] Bump lodash from 4.17.10 to 4.17.15 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#132](https://github.com/adopted-ember-addons/ember-keyboard/pull/132) [Security] Bump mixin-deep from 1.3.1 to 1.3.2 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#133](https://github.com/adopted-ember-addons/ember-keyboard/pull/133) [Security] Bump tar from 2.2.1 to 2.2.2 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
* [#137](https://github.com/adopted-ember-addons/ember-keyboard/pull/137) Bump ember-test-selectors from 1.0.0 to 4.1.0 ([@dependabot-preview[bot]](https://github.com/apps/dependabot-preview))
</details>

#### Committers: 2
- Luke Melia ([@lukemelia](https://github.com/lukemelia))
- [@dependabot-preview[bot]](https://github.com/apps/dependabot-preview)

#### Other contributors

Thank you to @optikalefx, @NullVoxPopuli @mattmcmanus, @seanCodes, and @bendemboski for helping to shape the API Design for this release.


## v6.0.0-beta.0 (2020-04-29) (Pre-release)

#### (Octane-friendly!)

_This is the first beta of ember-keyboard 6.0.0!_

* [BREAKING] Now requires ember >= 3.8 and node >= 10.x
* [FEATURE] Add `on-keyboard` and `keyboard-shortcut` element modifiers and make `keyboard-press` component public and documented [\#111](https://github.com/adopted-ember-addons/ember-keyboard/pull/111) ([lukemelia](https://github.com/lukemelia)) - These names may be changed before final release of 6.0.

The best place for documentation on the new features is https://github.com/adopted-ember-addons/ember-keyboard/blob/master/tests/dummy/app/templates/usage.hbs -- our docs site will be updated when 6.0.0 final is released)

_Note: ember-keyboard has been moved to the adopted-ember-addons org. We're grateful to @briarsweetbriar for maintaining the project prior to this transition and for facilitating a smooth transition and ensuring this addon can continue to evolve with Ember._

## v5.0.0 (2019-11-19)

* Upgrades to ember-cli-babel 7.


## v4.0.0 (2018-09-05)

#### Support software keymaps

Big thanks to @NullVoxPopuli for [this PR](https://github.com/patience-tema-baron/ember-keyboard/pull/88). Now, `ember-keyboard` will respond to the key mapping, rather than the key itself. For instance, with a Dvorak key mapping, pressing 'k' will give a code of 'KeyV' and a key of 'k'. Now, `ember-keyboard` will treat a Dvorak 'KeyV' as a 'k'.

This may introduce a regression if you intended to map to the key themselves, rather than to their code. If that's the case, please take out an issue and we'll figure out a way to support that behavior as well.

## v3.0.0 (2018-01-16)

#### Remove jQuery and make touch/mouse events opt-in

This release has two potential breaking changes:

1. `jQuery`'s been removed! This means that responders will now receive vanilla events, instead of jQuery events. For instance, using jQuery's `isImmediatePropagationStopped` will no longer work:

```js
responder: Ember.on(keyDown('KeyA'), function(event) {
  event.isImmediatePropagationStopped();
})
```

2. Mouse/touch events are now opt-in. You'll have to specify them in your `config/environment.js` file:

```js
emberKeyboard: {
  listeners: ['keyUp', 'keyDown', 'keyPress', 'click', 'mouseDown', 'mouseUp', 'touchStart', 'touchEnd']
}
```

...

## v2.0.0 (2016-07-13)

#### Use `code` instead of `key`

This release switches to the more consistent [`code` property](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code). For instance:

```
keyDown('KeyA', . . .)
keyDown('Digit1', . . .)
keyDown('Numpad1', . . .)
keyDown('Space', . . .)
```

## v1.1.0 (2016-04-23)

#### :bug: Bugs
* Add support for irregular IE key names

## v1.0.3 (2016-03-23)

#### :rocket: Enhancement
* Add a `keyPress` test helper

## v1.0.2 (2016-03-23)

## v1.0.1 (2016-03-22)

#### :house: Internal
* Update Ember CLI

## v1.0.0 (2016-03-22)

#### :rocket: Enhancement
* Add a `keyPress` listener to accompany `keyDown` and `keyUp`
* Add ability to specify which events `ember-keyboard` listens for in the app's `config/environment.js`

## v0.2.8 (2016-03-09)

#### :rocket: Enhancement
* Add test helpers

...

## v0.0.2 (2015-10-24)
* The beginning
