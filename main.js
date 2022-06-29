let openBtn = document.querySelector(".fa-bars");
let closeBtn = document.querySelector(".fa-times");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let loader = document.querySelector('.preloader');

window.addEventListener('load',()=>{
    loader.style.display='none';
})
openBtn.addEventListener("click", ()=>{
    menu.style.right = "0px";
});
closeBtn.addEventListener("click", ()=>{
    menu.style.right = "-200px";
});
