function largestOfFour(arr) {
    let largestArr = [];
    for(let i = 0; i < arr.length; i++) {
      let currentArr = arr[i];
      let currentLargest = currentArr[0];
      for(let j = 1; j < currentArr.length; j++) {
        if(currentArr[j] > currentLargest) {
          currentLargest = currentArr[j]
        }
      }
          largestArr.push(currentLargest);
    }
    // console.log(largestArr)
    return largestArr;
  }