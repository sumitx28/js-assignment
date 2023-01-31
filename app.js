
// Assignment: 

// Q1:

// Create a shape class with name, sides properties with a constructor to assign the values to them.

// Add a method getShape to get the shape info.

// Create a child class circle/rectangle from the shape class, the child class should contain new properties, a new method to calculate the area. Set properties of the parent class from the child constructor.

class Shape {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }

    getShape() {
        console.log(`Shape : ${this.name}`)
        console.log(`Side A : ${this.x}`)
        console.log(`Side B : ${this.y}`)
    }
}

class Ractangle extends Shape {
    constructor(name, x, y) {
        super(name, x, y);
    }

    getArea() {
        return this.x * this.y;
    }
}

let ractangle = new Ractangle('ractangle', 10, 20);

ractangle.getShape();
console.log(ractangle.getArea());

// Q2:

// Write an async function to call an external API.

// The function should return a mapped response with just id, name & email. (Use fetch API to call the External resource)

// Add error handling using try-catch as well.

// External API to use:  https://reqres.in/api/users

const fetch = require("node-fetch");

const API_URL = 'https://reqres.in/api/users';

let getData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    }
    catch (err) {
        throw new Error(err);
    }
}

getData()
    .then(res => console.log(res))
    .catch(err => console.log(err));