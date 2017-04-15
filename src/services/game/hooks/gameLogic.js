'use strict';

module.exports = function(options) {
 return function(hook) {
   return hook.app.service('games').get(hook.id)
   .then((game) =>{

          console.log("starting gamelogic");

    //  if  (hook.data.PlayerInput[0].length === 2){

       if (hook.data.PlayerInput[0].indexOf(1) === 1 && hook.data.PlayerInput[1].indexOf(2) === 2) {
          return hook.data.winner = game.playerIds[0]
          console.log("firststatement");
        }


         else if (hook.params.user.PlayerInputOne ===2 && hook.params.user.PlayerInputTwo ===1) {
            return hook.data.winner = game.playerIds[0]
         }

         else if (hook.params.user.PlayerInputOne ===3 && hook.params.user.PlayerInputTwo ===2) {
              return  hook.data.winner = game.playerIds[0]
             }

         else if (hook.params.user.PlayerInputOne ===2 && hook.params.user.PlayerInputTwo ===1) {
               return hook.data.winner = game.playerIds[1]
             }

         else if (hook.params.user.PlayerInputOne ===1 && hook.params.user.PlayerInputTwo ===2) {
               return hook.data.winner = game.playerIds[1]
             }

         else if (hook.params.user.PlayerInputOne ===1 && hook.params.user.PlayerInputTwo ===3) {
               return hook.data.winner = game.playerIds[1]
             }
         else {

         }

      //  }



    })
  }
}
