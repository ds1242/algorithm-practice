function sumAll(arr) {
    arr = arr.sort((a, b) => a - b);
    let total = 0;
    for(let i = arr[0]; i <= arr[1]; i++) {
      total += i;
    }
    // console.log(total)
    return total;
  }
  
  sumAll([1, 4]);