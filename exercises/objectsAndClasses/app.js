/*
const myCar = {
    make: "Honda",
    model: "accord",
    year: 1990,
    nickName: "kiki",
    isLoud: true,
    isRunning: false
}
console.log(myCar.nickName);
console.log(myCar.model);

const groceryList = ['chicken', 'broccoli', 'rice'];

const chicken = {
    wing: 2,
    flavor: 'mojo',
    eat: () => {
        console.log('nom nom nom');
    }
}


const house = {
    doors: 9
}

house.window = 30;

house.hasGarden = true;

console.log(house);

const myPet = {
    name: "Tom",
    age: 4,
    favoriteThings: ['Milk', 'Sleep'],
    speakFrench: true,
    solveRubikCube: true
}
console.log(myPet);
*/

class Vehicle {
    //constructor
    constructor(vin, make, model) { //new object will be returned by default
        this.vin = vin;
        this.make = make;
        this.model = model;
    }
    //instance method
    start() {
        this.running = true;
        console.log('running');
    }
}


const plane = new Vehicle('glkansdfaoih32oi', 'Boeing');

const myFirstCar = new Vehicle('3lasdf2fkasdnfj', 'Honda');

const car = new Vehicle('asdkjfhuiy2191731', 'Toyota', 'Camry');

console.log(car);

