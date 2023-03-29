document.querySelector(".first-row").style.display = "flex";
document.querySelector(".col-lg-8").style.width = "70vw";
document.querySelector(".col-lg-4").style.width = "30vw";
document.querySelector(".col-lg-4").style.height = "45vw";
document.querySelector(".col-lg-4").style.border = "2px solid red";
document.querySelector(".second-row").style.display = "flex";
document.querySelector(".navbar-nav").style.listStyle = "none";
document.querySelector(".navbar-nav").style.display = "flex";
document.querySelector(".navbar-expand-lg").style.display = "flex";
document.querySelector(".navbar-expand-lg").style.justifyContent = "space-between";

var litems = document.querySelectorAll(".nav-link");
for(var i=0;i<litems.length;i++){
    litems[i].style.textDecoration = "none";
    litems[i].style.color = "grey";

}
document.querySelector(".navbar-toggler").remove();