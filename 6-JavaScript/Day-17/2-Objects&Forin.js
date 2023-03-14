//Object Declaration
let loginfo = {
    name: 'Shivam Kausik',
    role: 'user',
    email: 'kausik987@email.com',
}
console.log(loginfo);
console.log(loginfo.email);

//For in Loop
for( let x in loginfo){
    console.log(loginfo[x]);
}

//Object.Create
const power ={
    fly: true,
    cordinate: Math.random()+2
}
const objct = Object.create(power)
console.log(objct);
console.log(objct.fly);

//Define Property
const obj4=Object.create({})
Object.defineProperty(obj4, 'book', {
    get: () => 'Rs Agarwall',
    enumerable: true
})
for(k in obj4){
    console.log(k);
}
