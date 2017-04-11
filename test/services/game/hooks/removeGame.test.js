'use strict';

const assert = require('assert');
const removeGame = require('../../../../src/services/game/hooks/removeGame.js');

describe('game removeGame hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    removeGame()(mockHook);

    assert.ok(mockHook.removeGame);
  });
});
