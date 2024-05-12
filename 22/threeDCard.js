const card = document.querySelector(".card");
const sec = document.querySelector(".sec");

sec.addEventListener("mousemove",(e)=>{
    let w = card.style.width
    console.log(w);
    let xAxis = e.clientX;
    let yAxis = e.clientY;
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;
    let offX = ((xAxis - centerX)/centerX) * 15 ;
    let offY = ((yAxis - centerY)/centerY) * 15 ;
    // console.log(xAxis,yAxis)
    // console.log(centerX,centerY)
    console.log(offX,offY)

    card.style.transform = `perspective(1000px) rotateX(${-offY}deg) rotateY(${offX}deg) `
})
sec.addEventListener("mouseleave",(e)=>{
    // console.log(e,e.offsetX,e.offsetY)
   setTimeout(()=>{
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
   },20)
})