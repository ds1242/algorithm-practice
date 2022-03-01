// Write code to merge two sorted arrays into a new sorted array

var mergeSorted = function (arr1, arr2) {
    let combinedArr = [];

    let idx1 = 0;
    let idx2 = 0;

    while(idx1 < arr1.length && idx2 < arr2.length) {
        let num1 = arr1[idx1];
        let num2 = arr2[idx2];

        if(num1 < num2) {
            combinedArr.push(num1);
            idx1++;
        } else {
            combinedArr.push(num2);
            idx2++;
        }
    }
    while (idx1 < arr1.length) {
        var num1 = arr1[idx1];
        combinedArr.push(num1);
        idx1++;
      }
    
      while (idx2 < arr2.length) {
        var num2 = arr2[idx2];
        combinedArr.push(num2);
        idx2++;
      }
    
      return combinedArr;


};
