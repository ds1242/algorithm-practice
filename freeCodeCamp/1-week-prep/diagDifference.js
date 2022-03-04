function diagonalDifference(arr) {
    // Write your code here
    let leftDiag = 0;
    let rightDiag = 0;
    let len = arr.length
    console.log(len)
    for(let i = 0; i < arr.length; i++){
        leftDiag += arr[i][i];
        // rightDiag += arr[len - i][len - i]
        rightDiag += arr[len - i - 1][i]
    }
    return Math.abs(leftDiag - rightDiag);

}