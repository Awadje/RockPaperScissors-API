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

     if  (hook.data.PlayerInput.length === 2){

       if    (hook.data.PlayerInputOne ===1 && hook.data.PlayerInputTwo ===2) {
           hook.data.winner = game.playerIds[0];
         }
         else if  (hook.params.user.PlayerInputOne ===2 && hook.params.user.PlayerInputTwo ===1) {
                 hook.data.winner = game.playerIds[0];
         }
         else if  (hook.params.user.PlayerInputOne ===3 && hook.params.user.PlayerInputTwo ===2) {
               hook.data.winner = game.playerIds[0];
             }
         else if  (hook.params.user.PlayerInputOne ===2 && hook.params.user.PlayerInputTwo ===1) {
               hook.data.winner = game.playerIds[1];
             }
         else if  (hook.params.user.PlayerInputOne ===1 && hook.params.user.PlayerInputTwo ===2) {
               hook.data.winner = game.playerIds[1];
             }
         else if (hook.params.user.PlayerInputOne ===1 && hook.params.user.PlayerInputTwo ===3) {
               hook.data.winner = game.playerIds[1];
             }
         else {
           console.log("yeah")
         }
       }


     })
    }
     }
