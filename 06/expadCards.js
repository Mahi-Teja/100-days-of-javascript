const cardImg = document.querySelectorAll(".card-img");

cardImg.forEach(function(card){
    card.addEventListener("click",function(){
        removeExpand();
        card.classList.add("expand");
    })

})
function removeExpand(){
    cardImg.forEach(function(card){
        card.classList.remove("expand")
    })
}
