const objOne = {
    name : 'Krishna',
    address : function() {
        return `${this.name}'s addrress is 13th Main, 4th block, Bangalore`;
    }
}

const objTwo = {
    name : 'Ram',
    address : () => {
        return `${this.name}'s addrress is 13th Main, 4th block, Bangalore`;
    }
}

console.log(objOne.address());
console.log(objTwo.address());