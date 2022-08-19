function runLengthEncoding(string) {
    // Write your code here.
    let count = 1;
    let encodedString = ''
    for (let i = 0; i < string.length; i++) {
      let j = i+1
      let newChar = string[i]
      while (string[i] === string[j] && count < 9){
        count++;
        j++;
      }
      encodedString += '' + count + '' + newChar
      i = j -1;
      count = 1;
    }
    return encodedString;
  }
  