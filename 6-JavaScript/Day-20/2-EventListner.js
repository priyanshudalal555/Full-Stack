function timey() {
    let me= new Date();
    document.getElementById("pg").innerText= `The time = ${me.getHours()} / ${me.getMinutes()} / ${me.getSeconds()}`
    document.getElementById("btn").style.backgroundColor="yellow"
    document .body.backgroundColor="lightblue"
}