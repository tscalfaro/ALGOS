function generateDocument(characters, document) {
    // Write your code here.
    if(document === "") return true;
  
    let charBank = {}
  
    for (let i = 0; i < characters.length; i++) {
      let c = characters[i]
      if (c in charBank) charBank[c]++;
      else charBank[c] = 1;
    }
    for (let i = 0; i < document.length; i++) {
      let c = document[i]
      if (c in charBank) charBank[c] -= 1;
      else return false;
      if(charBank[c] < 0) return false
    }
    return true;
  }