// Javascript is an asynchronous programming language
// There will not be any waiting in asnchronus code

const a = 10,  b = 21;

console.log('1');

let sum = 0;
setTimeout(() => {
    sum = a+b;
    console.log('sum block inside : ',sum);
    return sum;
}, 2000);

console.log(sum);
console.log('Outside');