// callbacks are used in JS when you want to make the flow synchronous
// callback is an anonymous function

let sum;
const funcTwo = (a, b, callback) => {
    setTimeout(() => { // program will not wait here
        sum = a + b;
        callback(sum);
    }, 2000);
}

funcTwo(3, 1, (resultTwo) => {
    console.log(`result from funcTwo ${resultTwo}`);
    // Code to run queries
})
