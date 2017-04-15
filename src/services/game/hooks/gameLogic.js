'use strict';

module.exports = function(options) {
 return function(hook) {
   return hook.app.service('games').get(hook.id)
   .then((game) =>{

       if (game.PlayerInputOne === 1 && game.PlayerInputTwo === 2)  {
          hook.data.winner = game.playerIds[0]
        }

        else if (game.PlayerInputOne === 2 && game.PlayerInputTwo === 1)  {
           hook.data.winner = game.playerIds[0]
         }

         else if (game.PlayerInputOne === 3 && game.PlayerInputTwo === 2)  {
            hook.data.winner = game.playerIds[0]
          }

          else if (game.PlayerInputOne === 2 && game.PlayerInputTwo === 1)  {
             hook.data.winner = game.playerIds[1]
           }

           else if (game.PlayerInputOne === 1 && game.PlayerInputTwo === 2)  {
              hook.data.winner = game.playerIds[1]
            }

           else if (game.PlayerInputOne === 1 && game.PlayerInputTwo === 2)  {
                hook.data.winner = game.playerIds[1]
                 }

            else if (game.PlayerInputOne === game.PlayerInputTwo) {
              return;
             }
       })
     }
   }
