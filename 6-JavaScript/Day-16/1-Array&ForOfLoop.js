//Methods of Array 
let names= ['raja','sumit','harsh','lucky','love'];

//Print Array
console.log(names);

//length of Array
console.log(names.length);

//print last element without knowing the index
console.log(names[names.length -1]);

//Modify value in array
names[4] = 'Love';
console.log(names[4]);

//Push in Value => Insertion at the end of array
names.push('Priyanshu');
console.log(names);

//Slicing in array
console.log(names.slice(3,6));

//Splice in Array - Insert Values Inside Array
names.splice(2,0, 'Shilpa','Umang');
console.log(names);

//ConCatination in array
let arr1=['a','b','c','d'];
let arr2=['e','f','g','h'];
console.log(arr1.concat(arr2));

//Fill()
let ary =[1,2,3,4,5,6,7];
ary.fill(null,1,3);
console.log(ary);

//Include()
let arry =[1,2,3,4,5,6,7,'a'];
console.log(arry.includes('a'));

//IndexOf()
let aryy =[10,20,30,40,50];
console.log(aryy.indexOf(50));

//isArray()
console.log(Array.isArray(aryy));

//Join()
let ar1=[9,8,7,6,5,4,3,2,1];
console.log(ar1.join(' > '));

//lastindexof()
let ar2=[9,8,7,6,5,4,3,2,1,9];
console.log(ar2.lastIndexOf(9));

//Map()
let ar3=[9,8,7,6,5,4,3,2,1,0];
console.log(ar3.map(Math.sqrt));

//Pop()
let ar4=[9,8,7,6,5,4,3,2,1];
console.log(ar4.pop());
console.log(ar4);

//Reverse()
let ar5=[9,8,7,6,5,4,3,2,1];
console.log(ar5.reverse());

//Shift()
let ar6=[9,8,7,6,5,4,3,2,1];
console.log(ar6.shift());
console.log(ar6);

//Sort()
let ar7=[9,8,7,6,5,4,3,2,1];
console.log(ar7.sort());

//unshift()
let ar8=[9,8,7,6,5,4,3,2,1];
