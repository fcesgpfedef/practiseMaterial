// Promises are used mainly to avoid callback hell
// Promise always will either resolve or reject
// Mainly used to handle asynchronous operations
const a = 21;
const funcOne = () => {
    return new Promise((resolve, reject) => {
        // some tasks i can perform here
        a = 10;
        if (typeof (a) === 'number') {
            resolve('Success');
        } else {
            reject('FAILURE');
        }
    })
}

funcOne().then((response) => {
    console.log(response);
}).catch((err) => {
    console.log('Handled');
});

console.log('I am at the last');