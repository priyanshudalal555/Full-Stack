//Function
function add(a, b){
    console.log(a+b);
}
add(2,3);
add(5,5);

//Swap Function
let a2=1,b2=2;
console.log(a2,b2);
function swap(x, y){
    let temp = x;
    x=y;
    y=temp;
    console.log(x,y);
}
swap(a2,b2);

//Function with Return Type
function square(a){
    return a*a;
}
let pow = square(66);
console.log(pow);
console.log(square(99));

//Array in function
function arrayPush(ara){
    return ara.push(6);
}

let ary=[1,2,3,4,5];
arrayPush(ary);
console.log(ary);

//Arrow Functions
let jaimini = (var1,var2) => {
    console.log(var1, var2);
}
jaimini(100, 50);