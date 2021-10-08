const obj = {
    a:1,
    b:2,
    address : {
        city : 'Hyderabad'
    }
}

obj.c = 3; // add a new element to object
obj.a = 21; // access the element of object 

for(let key in obj) { // looping through an an object
    // console.log(`key is : ${key} value is : ${obj[key]}`);
}

// Example of optional chaining
try {
    const value = obj.address2.city === 'Hdedeyderabad' ? 'Success' : "Failure";
}catch(e) {
    console.log('Error is caught')
}


// console.log(value);