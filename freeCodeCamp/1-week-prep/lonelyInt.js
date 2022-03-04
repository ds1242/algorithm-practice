function lonelyinteger(a) {
    // Write your code here
    a = a.sort((a,b) => a - b);
    let lonely = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== a[i+1] && a[i] !== a[i-1]) {
            lonely = a[i];
        }
        
    }
    return lonely;

}
