'use strict';

// src/services/game/hooks/postWeapon.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const currentGame = hook.params.game;

    hook.data.playerInput = `${$currentUser.name}'s Move`;

    hook.data.playerIds = [hook.params.user._id];
  };
};
