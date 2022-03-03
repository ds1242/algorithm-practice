function titleCase(str) {
    let strArr = str.toLowerCase().split(' ');
    let output = [];
    for(let i = 0; i < strArr.length; i++) {
      output.push(strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1));
      
      
    }
    return output.join(' ');
  }
  
  titleCase("I'm a little tea pot");