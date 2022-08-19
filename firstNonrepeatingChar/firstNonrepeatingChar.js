function firstNonRepeatingCharacter(string) {
    // Write your code here.
    const charactersCount = {}
    for(const ch of string){
      if(!(ch in charactersCount)) charactersCount[ch] = 0;
      charactersCount[ch]++
    }
    for(const ch of string){
      if(charactersCount[ch] === 1) return string.indexOf(ch)
    }
    return -1;
  }