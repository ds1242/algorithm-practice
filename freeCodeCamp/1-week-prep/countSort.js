function countingSort(arr) {
    // Write your code here
    // sort array
    arr = arr.sort((a,b) => a - b);
    let countArr = Array(100).fill(0);
    for (let number of arr) {
        countArr[number]++
    }
    return countArr;

}