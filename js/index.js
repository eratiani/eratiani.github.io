$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        navText:["<img src='./images/arrowleft.svg'>","<img src='./images/arrowright.svg'>"],
    });
});
let card1 = document.querySelector(".card1");
let card2 = document.querySelector(".card2");
let card3 = document.querySelector(".card3");
let cardBtn1 = document.querySelector(".sec_3cardsbtn1");
let cardBtn2 = document.querySelector(".sec_3cardsbtn2");
let cardBtn3 = document.querySelector(".sec_3cardsbtn3");
card1.addEventListener("mouseover", bgChanger1);
card1.addEventListener("mouseout", bgChanger11);
card2.addEventListener("mouseover", bgChanger2);
card2.addEventListener("mouseout", bgChanger22);
card3.addEventListener("mouseover", bgChanger3);
card3.addEventListener("mouseout", bgChanger33);
function bgChanger1() {
    cardBtn1.style.backgroundColor = "#ffd7bb";
    
}
function bgChanger11() {
    cardBtn1.style.backgroundColor = "#FAFAFA";
} 
function bgChanger2() {
    cardBtn2.style.backgroundColor = "#ffd7bb";
    
}
function bgChanger22() {
    cardBtn2.style.backgroundColor = "#FAFAFA";
}
function bgChanger3() {
    cardBtn3.style.backgroundColor = "#ffd7bb";
    
}
function bgChanger33() {
    cardBtn3.style.backgroundColor = "#FAFAFA";
    
}
