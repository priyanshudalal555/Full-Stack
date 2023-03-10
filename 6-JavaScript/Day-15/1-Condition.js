//Condition Statements in JavaScript


//If else
let rating=5;
if(rating==5){
    console.log("5 Stars")
}
else if(rating==4){
    console.log("4 Stars")
}
else{
    console.log("3 or less Stars")
}

//Switch Case
let Id="Aladin";
switch(Id){
    case "John":
        console.log("Send him to America");
        break;
    case "Aladin":
        console.log("Send him to Desert");
        break;
    default:
        console.log("Id doesn't matched!");        
}

//Ternary Conditions
let age=15;
age>18? console.log("You are an Adult"):console.log("You are an Child");