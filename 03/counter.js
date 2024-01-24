const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const output = document.querySelector("#display-value");
let count = 0;

increaseBtn.addEventListener("click",increase)
decreaseBtn.addEventListener("click",decrease)
resetBtn.addEventListener("click",reset)
document.addEventListener("keydown",function(event){
    if (event.key === 'w') {
       increase();
    //    alert("arrow clicked")
    }else if (event.key === 's') {
        decrease();
    }else if (event.key === 'r') {
        reset();
      }
})

function increase(){
    count++;
    output.innerHTML=count;
}
function decrease(){
    count--;
    output.innerHTML=count;
}
function reset(){
    count=0;
    output.innerHTML=0;
}