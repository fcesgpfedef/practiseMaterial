const addressOne = function (city) {
    const add = {
        city : city,
        street : '13th Main'
    }
    
    return add
}

console.log(addressOne('Trichy'));

// ARROW FUNCTIONS
const add1 = {
    city : 'city',
    street : '13th Main'
}
const addressTwo = () => add1

console.log(addressTwo('Madurai'));