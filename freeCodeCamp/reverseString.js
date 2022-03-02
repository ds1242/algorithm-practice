function reverseString(str) {
    let strArr = str.split('');
    let newArr = []
    for(let i = str.length; i > 0; i--) {
      newArr.unshift(str[i]);
    }
    // console.log(newArr);
    return newArr.join('');
  }