function mutation(arr) {
    let firstWord = arr[0].toLowerCase().split('');
    let secondWord = arr[1].toLowerCase().split('');
    for(let i = 0; i < secondWord.length; i++) {
      if(firstWord.indexOf(secondWord[i]) < 0) {
        return false;
      }
    }
    
    return true;
  }
  
  mutation(["hello", "hey"]);