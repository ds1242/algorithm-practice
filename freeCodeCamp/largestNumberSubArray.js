function largestOfFour(arr) {
    let largest = arr[0][0];
    for(let i = 0; i < arr.length; i++) {
      let currentArr = arr[i];
      for(let j = 0; j < currentArr.length; j++) {
        if(currentArr[j] > largest) {
          largest = currentArr[j];
        }
      }
    }
    return largest;
  }