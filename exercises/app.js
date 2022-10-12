console.log("hello world");

let num = 3;

if (num>0){
    console.log("positive");
}
else if (num<0){
    console.log("negative");
}
else {
    console.log("Neither")
}


const allowedAge = 12;

if(allowedAge >= 18) {
    console.log("Access granted")
} else {
    console.log("Access denied")
}


let num1 = 122;

if(num1>0){
    if(num1>=100){
        console.log("positive & greater than 100")
    } else{
        console.log("positive but less than 100")
    }
}else {
    console.log("negative")
}


let marks=91;
    if(marks>=90)
    console.log("Grade A");
    else if(marks>=80 && marks<90)
    console.log("Grade B");
    else if(marks>=70 && marks<80)
    console.log("Grade C");
    else if(marks>=55 && marks<70)
    console.log("Grade D");
    else
    console.log("Grade F");