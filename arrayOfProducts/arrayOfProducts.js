//PROMPT ~ GIVEN A NONEMPTY ARRAY OF INTEGERS, RETURN AN ARRAY OF THE SAME LENGTH CONTAINING THE PRODUCT OF EVERY ENTRY BESIDE THE THE CURRENT POSITION. EX ([4, 1, 3] => [3, 12, 4])


//SPACE || TIME  O(N) || O(N)
function arrayOfProducts(array) {
    // Write your code here.
    let multArr = [];
    let count = 0;
    let product = 1;
    for (let index = 0; index < array.length; index++) {
       for (let i = 0; i < array.length; i++) {
          if (i === count) continue;
          product *= array[i]
        }
      multArr.push(product);
      product = 1;
      count++;
    }
     return multArr;
    
  }