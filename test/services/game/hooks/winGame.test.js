'use strict';

const assert = require('assert');
const winGame = require('../../../../src/services/game/hooks/winGame.js');

describe('game winGame hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    winGame()(mockHook);

    assert.ok(mockHook.winGame);
  });
});
