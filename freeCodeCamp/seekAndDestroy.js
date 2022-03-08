function destroyer(arr) {
    const newArr = [];
    let outputArr = arr[0];
    // console.log(outputArr);
    for(let i = 1; i < arr.length; i++){
      let currentVal = arr[i];
      for(let j = 0; j < outputArr.length; j++) {
        if(outputArr[j] === currentVal) {
          outputArr = outputArr.splice(i, 1);
        }
      }
    }
    console.log(outputArr);
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);