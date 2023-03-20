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

//1.
setTimeout(() => {
    console.log("GOAT");
}, 4000);

//2.
function sd(){
    console.log("Shiva");
}
setTimeout(sd, 1000);

//Set Interval
setInterval(() => {
    console.log("|");
}, 1000);