'use strict';

module.exports = function(options) {
 return function(hook) {
   return hook.app.service('games').get(hook.id)
   .then((game) =>{
console.log("start gamelogic");
       if (game.PlayerInputOne === 1 && game.PlayerInputTwo === 2)  {
          hook.data.winner = hook.params.user.name
          console.log(hook.params.user.name)
        }
console.log(game.winner);
        if (game.PlayerInputOne === 2 && game.PlayerInputTwo === 1)  {
           hook.data.winner = hook.params.user.name
         }

         if (game.PlayerInputOne === 3 && game.PlayerInputTwo === 2)  {
            hook.data.winner = hook.params.user.name
          }

          if (game.PlayerInputOne === 2 && game.PlayerInputTwo === 1)  {
             hook.data.winner = hook.params.user.name
           }

           if (game.PlayerInputOne === 1 && game.PlayerInputTwo === 2)  {
              hook.data.winner = hook.params.user.name
            }

           if (game.PlayerInputOne === 1 && game.PlayerInputTwo === 2)  {
                hook.data.winner = hook.params.user.name
                 }

       })
     }
   }
