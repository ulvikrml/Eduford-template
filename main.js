let openBtn = document.querySelector(".fa-bars");
let closeBtn = document.querySelector(".fa-times");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
openBtn.addEventListener("click", ()=>{
    menu.style.right = "0px";
});
closeBtn.addEventListener("click", ()=>{
    menu.style.right = "-200px";
});