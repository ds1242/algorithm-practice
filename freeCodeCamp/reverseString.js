function reverseString(str) {
    let strArr = str.split('');
    let newArr = []
    for(let i = 0; i < str.length; i++) {
      newArr.unshift(str[i]);
    }
    // console.log(newArr);
    return newArr.join('');
  }