const fibonacci = function(num) {
let fib = [0, 1];
let fib2 = [0, 1];
for(let i=fib.length; i<=num; i++) {
    fib[i] = fib[i-2] + fib[i-1];
    fib2.push(fib[i])
}
return fib2[num] > -1 ? fib2[num] : "OOPS";
};



// Do not edit below this line
module.exports = fibonacci;
