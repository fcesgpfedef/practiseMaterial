// program on try catch, basically used to catch the exceptions on runtime

const a = 100;

try {
    throw new error(' I am throwing error');
    console.log('Helooo');
} catch(errorMsg) {
    console.log('Some error occured');
} finally {
    console.log(' I am done with execution');
}