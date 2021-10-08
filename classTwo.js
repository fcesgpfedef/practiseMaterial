// ES 7 syntax

class Parent {
    name = 'Raj';
    age = 21;

    getAddress = () => {
        console.log(`name is : ${this.name} age is ${this.age} `);
        return 'Heelo';
    }
}

class Child extends Parent{
    gender = 'Female';
}
const obj1  = new Child();
console.log(obj1.getAddress());
console.log(obj1.age);