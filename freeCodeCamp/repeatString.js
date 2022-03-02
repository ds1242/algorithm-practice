function repeatStringNumTimes(str, num) {
    let output = []
    for(let i = 0; i < num; i++) {
      output.push(str);
    }
  
    return output.join('');
}