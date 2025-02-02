let menu_btn = document.querySelector('.header .icons i.fa-ellipsis-vertical');
let close_btn= document.querySelector('.header .icons i.fa-x');
let navbar= document.querySelector('.header .navbar');

menu_btn.addEventListener("click", ()=>{
    navbar.classList.add("active");
    menu_btn.classList.add("hide");
    close_btn.classList.add("show");
});

close_btn.addEventListener("click", ()=>{
    navbar.classList.add("active");
    menu_btn.classList.add("hide");
    close_btn.classList.add("show");
});

