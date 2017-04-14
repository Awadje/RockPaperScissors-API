'use strict';

const assert = require('assert');
const postWeapon = require('../../../../src/services/game/hooks/postWeapon.js');

describe('game postWeapon hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    postWeapon()(mockHook);

    assert.ok(mockHook.postWeapon);
  });
});
