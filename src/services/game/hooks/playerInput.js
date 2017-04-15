'use strict';

// src/services/game/hooks/playerPick.js
//.
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
 return function(hook) {
   return hook.app.service('games').get(hook.id)
   .then((game) => {
     if (JSON.stringify(hook.params.user._id) === JSON.stringify(game.playerIds[0])) {
       hook.data.PlayerInputOne = hook.data.PlayerInput;
       return;
     } else {
       hook.data.PlayerInputTwo = hook.data.PlayerInput;
       return;
     }


     })
    }
     }
