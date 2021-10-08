class Parent {
    constructor () {
        this.name = 'Raj';
        this.age = 67
    }

    getAddress () {
        return `${this.name} with age ${this.age} lives in Hyderabad`;
    }
}

class Child extends Parent {
    constructor(gender) {
        super();
        this.gender = gender;
    }
}

const childOne = new Child('male');
childOne.age = 73;
console.log(childOne);

