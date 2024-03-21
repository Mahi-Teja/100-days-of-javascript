const leftBtn = document.querySelector(".prev-btn");
const rightBtn = document.querySelector(".next-btn");
const imgBox = document.querySelector("#img-box")
const images = document.querySelectorAll(".img");

const sliderBox = document.querySelector(".slider-container")
const sliderLength = images.length;


let count =0;

images.forEach(function(img,index){
    img.style.left=`${index*100}%`
})

rightBtn.addEventListener("click",nextSlide);

function nextSlide(){
    // alert()
    count++;
    if(count>sliderLength-1){
        count=0
    }
    let m=`translateX(-${count*100}%)`;
    images.forEach(function(img){
        img.style.transform=m;
       
    });
}

leftBtn.addEventListener("click",prevSlide);
function prevSlide(){
    count--;
    if(count<0){
        count=sliderLength-1
    }
    let m=`translateX(-${count*100}%)`;
    images.forEach(function(img){
        img.style.transform=m;
        
    });
}

// let slideShow =setInterval(autoSlide,3000);

function autoSlide(){
    nextSlide()
}
