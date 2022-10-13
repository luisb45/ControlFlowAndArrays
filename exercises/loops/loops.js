console.log("loops");

// Exercise 1 :Count down from 10
const countDown =[];
for( let i = 10; i > 0; i--){
    countDown.push(i);
}
console.log(countDown);

// Exercise 2: 1,3,5,7,9
const exercise2 = [];
for( let i = 1; i < 10; i += 2){
    exercise2.push(i);
}
console.log(exercise2);

//Exercise 3: Multiples of 3 from 6-60
const multi3 = [];
for( let i = 6; i <= 60; i += 3){
    multi3.push(i);
}
console.log(multi3);

//Exercise 4: # 
let output = []
for  (let i = 1; i<=7; i++){
      output.push("#");
      console.log(output.join());
}

const favShows = ['Breaking Bad','Naruto','StarWars']

let firstShow = favShows[0];
    console.log(firstShow);

    // push adds to end of array
favShows.push();
console.log(favShows);

    //pop removes last element in array
    favShows.pop();
    console.log(favShows);



const movies = ["Black panther", "EEAAO", "Black Adam"];

movies.forEach(( movie, index) => console.log("Element: ", movie, " Index: ", index));

