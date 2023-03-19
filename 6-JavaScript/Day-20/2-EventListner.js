function timey() {
    let me= new Date();
    document.getElementById("pg").innerText= `The time = ${me.getHours()} : ${me.getMinutes()} : ${me.getSeconds()}`
    document.getElementById("btn").style.backgroundColor="yellow"
    document .body.backgroundColor="lightblue"
}

    document.addEventListener("click", textchange)
    function textchange(){
        document.getElementById("pg2").innerText = "Click Happen"
    }
 
    document.addEventListener("mouseenter", textchange)
    function textchange(){
        document.getElementById("pg3").innerText = "Mouse Inside Document"
        document.getElementById("pg3").style.color ="green"
    }