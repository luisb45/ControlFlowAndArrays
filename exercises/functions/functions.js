
/*
//function declaration
function one() {
    return 'one'
}

one(); //calling a function

//function expression
const two = () => {
    return 2;
}
const shortenedTwo = () => 2;
*/


/*
function areBothEven(n1, n2) {
    console.log(n1 % 2)
    return !(n1 % 2) && !(n2 % 2);
}

console.log(areBothEven(2, 6));

*/

/*
let maria = getDevObject("Maria", "HTML", "CSS", "JavaScript");

function getDevObject( name, ...skills) {
    return {
        devName: name,
        jobSkills:skills
    }
}
console.log(getDevObject(maria));
*/

/*
function getDevObject(name) {
    let skills = [];

    for (let i = 1; i < arguments.length; i++){
        skills.push(arguments[i]);
    }

    return {
        devName: name,
        jobSkills: skills
    }
}

console.log(getDevObject(maria));
*/

/*
const sayName = (name) => {
    console.log(`Hello my name is ${name}`);
}

sayName('Kadija');
sayName('Max the Maverick');
sayName('Overton');

const calculateAreaOfSquare = (length, height) => {
    let sqft = length * height;
    console.log(`My square or rectangle is ${sqft} square feet.`)
}

calculateAreaOfSquare(38, 18);
*/


const calculateAreaOfTriangle = (width, height) => {
    let sqft = .5 * width * height;
    console.log(`The area of a triangle with a width of ${width} 
    and a height of ${height} is ${sqft} square units.`)
}
calculateAreaOfTriangle(40, 15);


const planetHasWater = (planet) => { return (planet === "Earth") || (planet === "Mars");
}

console.log(planetHasWater("Earth"));