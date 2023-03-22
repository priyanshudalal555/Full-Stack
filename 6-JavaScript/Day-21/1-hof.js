const callback = (n) => {
    return n**2;
};

function cube(callback, n){
    return callback(n) *n;
}
console.log(cube(callback, 3));

//For Each
const arr =['Jai Jinendra','Ram Ram','Radhe Radhe','Namestey','Namaskaram'];

// 1. Method
arr.forEach(print);
function print(val){
    console.log(val)
}

// 2.nd Method
arr.forEach((val) =>{
    console.log(val)
});

//Set Time Out

// //1.
// setTimeout(() => {
//     console.log("GOAT");
// }, 4000);

// //2.
// function sd(){
//     console.log("Shiva");
// }
// setTimeout(sd, 1000);

//Set Interval
// setInterval(() => {
//     console.log("|");
// }, 1000);

//Map
const nums = [5,6,7,8,9];
const numsquare = nums.map((num)=> num*num);
console.log(numsquare);

//Filter
const country = ["Bharat","Paistan","Nepal","Bhutan","Sri Lana","Bangladeesh","Myanmar"];
const cl = country.filter((val) => val.includes("Bh"));
console.log(cl);

//Sort and Reverse Sort
const country2 = ["Bharat","Paistan","Nepal","Bhutan","Sri Lana","Bangladeesh","Myanmar","Ireland","Australia"];
console.log(country2.sort());
console.log(country2.reverse()); 


//Destructuring
const sci = [2.72, 3.14, 9.81, 37, 100];
let[e, pi, grav, bodytemp, boiltemp] = sci;
console.log(e, pi, grav, bodytemp, boiltemp);

//Spread
function sum3(x, y, z){
    return x+y+z;
}
let vls = [1,2,3];
console.log(sum3(...vls));

//Rest
function sums(...args){
    let sum = 0;
    for (const x of args){
        sum= sum+x;
    }
    return sum;
}
console.log(sums(1,2,3,4,5,6,7,8,9));

//Try and Catch
try{
    let fname = "Priyanshu";
    console.log(fname + "" + lname);
}catch (err) {
    console.log(err.name, "Last Name Empty");
}finally{
    console.log("Run at any cost");
}

