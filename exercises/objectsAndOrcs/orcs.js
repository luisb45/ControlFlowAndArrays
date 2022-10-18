/*
const adventurer = {
    name: 'Luis',
    hitpoints: 10,
    belongings: ['sword', 'potion', 'Tums'],
    companion: {
        name: 'peanut',
        type: 'corgi',
        companion: {
            name: 'tick',
            type: 'parasite',
            belongings: ['scuba tank', 'rogan josh', 'health insurance']
        }
    }
}
 console.log(adventurer.belongings[0]);

for (let i = 0; i < adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i]);
}


//Access the companion object
console.log(adventurer.companion.name);

//Access companion's companion type
console.log(adventurer.companion.companion.type);

//Get health insurance
console.log(adventurer.companion.companion.belongings[2]);


const movies = [
    { title: "Tokyo Story" },
    { title: "Paul Blart: Mall Cop" }, 
    { title: "L'Avventura" }
];

console.log(movies); //array of objects
console.log(movies[0]); // first object in the array
console.log(movies[0].title); //prints title in object

for(let i = 0; i < movies.length; i++) {
    console.log(movies[i].title);
}



const foo = {
    someArray: [1, 2, 3],
    someObject: {
        someProp: 'oh hai, mark'
    },
    someMethod: () => {
        console.log('inside of method');
    }
}

console.log(foo.someObject.someProp); //oh hai
console.log(foo.someArray[0]); //1
console.log(foo.someMethod());



//store an object in an array
const foo1 = [
    {prop: 'weee'},
    2,
    35
]

//store an array in a array
const foo2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
console.log(foo2[1][2]); //7

//store function in a array
const foo3 = [
    1,
    "hi",
    ()=> {
        console.log('fun')
    }
];
console.log(foo3[2]() );






const player = {
    name: 'Josh the Great',
    health: 1000,
    power: 1000,
    stamina: 1000
}

const bigBadBoss = {
    name: "Magnardo the Merciless",
    health: 1000000000,
    power: 1000000000,
    stamina: "Infinity"
}

const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
    const newEnemy = {
      name: nameIs,
      health: healthIs,
      power: powerIs,
      stamina: staminaIs
    }
    return newEnemy
  }
  const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
    const newPlayer = {
      name: nameIs,
      health: healthIs,
      power: powerIs,
      stamina: staminaIs
    }
    return newPlayer
  }



//create a character

class Character {
    //constructor
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || false;
        
    }
    //setter method
    setHair(hairColor){
        this.hair = hairColor;
    }
    greet(otherCharacter) {
        console.log('hi ' + otherCharacter + '!');
    }
    classyGreeting (otherClassyCharacter) {
        console.log('Greetings ' + otherClassyCharacter.name + '!'); 
    }
    smite() {
        console.log('I smite thee you vile person');
    }
}

const p1 = new Character('Luis', 633, 'red', 'silver', true, true);
const enemy = new Character();

// console.log(p1.greet('bob'));
// console.log(p1.smite());

//console.log(enemy.greet('sauran'));

console.log(p1); 
p1.setHair('pink');

console.log(p1.classyGreeting(p1));

*/


//Parent class

class Character {
    constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || true;
    }
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!');
    }
    classyGreeting (otherClassyCharacter) {
      console.log('Howdy ' + otherClassyCharacter.name + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
    smite () {
      console.log('i smited thee.');
    }
  
  }
  class Hobbit extends Character {
    constructor(name, age, eyes, hair) {
        super(name, age, eyes, hair);
        this.skills = ['thievey', 'speed', 'willpower']
    }
    steal () {
    console.log("let's get away!")
    }
    greet (otherCharacter) {
        console.log(`Hobbit says hello to ${otherCharacter}`)
    }
    smite() {
        super.smite();
        this.steal();
    }
  }


const frodo = new Hobbit('Mr Baggins', 33, 'blue', 'black')
// console.log(Hobbit);
// console.log(frodo.smite());
// console.log(frodo.steal());
// console.log(frodo.greet('Sam'));

console.log(frodo);



