let FIB_MAP = {};

var fibonacci = function(n) {
    if(n==0 || n == 1){
      FIB_MAP[n] = n
      return n;
    }
    let rslt =  (FIB_MAP[n - 1] || fibonacci(n-1)) + (FIB_MAP[n - 2] || fibonacci(n-2));
    FIB_MAP[n] = rslt;
    return rslt
}



console.log('map', FIB_MAP,fibonacci(70) )