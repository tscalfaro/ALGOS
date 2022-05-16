// GIVEN TWO ARRAYS AND A BOOLEAN (FASTEST), IF TRUE, PAIR EACH RIDER SO THAT THE FASTEST SPEED TOTAL IS RETURNED. ONLY THE SPEED OF THE FASTEST RIDER IN THE PAIR IS TAKEN. IF FALSE, RETURN THE SUM OF THE LOWEST SPEEDS THAT CAN BE MADE BY PAIRING.

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
      redShirtSpeeds.sort((a,b) =>  a - b)
      //WAIT TO SORT NEXT ARRAY UNTIL FASTEST IS EVALUATED
      if (fastest){
          blueShirtSpeeds.sort((a,b) =>  b - a)
          let maxSpeed = 0
          for (let i = 0; i < redShirtSpeeds.length; i++){
              maxSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
          }
          return maxSpeed
      } else {
          blueShirtSpeeds.sort((a,b) =>  a - b)
          let minSpeed = 0
          for (let i = 0; i < blueShirtSpeeds.length; i++){
              minSpeed += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i])
          }
          return minSpeed
          
      }
    return 0;
  }