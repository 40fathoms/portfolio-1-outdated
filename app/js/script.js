const navbarVisible = document.querySelector(".navbar");
const hamburger = document.querySelector(".navbar-mobile_hamburger");
const body = document.querySelector("#body");

hamburger.addEventListener("click", function(){
    if (navbarVisible.classList.contains("mobile")){
        navbarVisible.classList.remove("mobile");
        body.classList.remove("mobile");
    }
    else{
        navbarVisible.classList.add("mobile");
        body.classList.add("mobile");
    }
})

///////////////////////

const project = document.querySelectorAll(".projects_image");

project.forEach(item => item.addEventListener("click", function(){
    if(item.classList.contains("active")){
        item.classList.remove("active");
    }
    else{
        item.classList.add("active");
    }
}))
