const subcribe = document.querySelector(".subscribe");
const popUp = document.querySelector(".pop-up")
const closePopUp = document.querySelector(".close-popup")

subcribe.addEventListener("click",function(){
    // popUp.classList.add("flex")
    popUp.classList.add("pop-up-show")
    // popUp.classList.remove("hidden")
    subcribe.classList.add("hidden")
})

closePopUp.addEventListener("click",function(){
    // popUp.classList.remove("flex")
    popUp.classList.remove("pop-up-show")
    // popUp.classList.add("hidden")
    subcribe.classList.remove("hidden")
    
})