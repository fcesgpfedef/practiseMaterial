if (true) {
    var x = 21; // scope of var is extended outside the block as well
    var y = 23; // scope of let and const is limited to only block
    console.log(`inside --- x is : ${x} and y is ${y}`);
}

console.log(`outside --- x is : ${x} and y is ${y}`);