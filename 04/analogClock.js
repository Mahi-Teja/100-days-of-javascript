const hr = document.querySelector(".hour")
const min = document.querySelector(".minutes")
const sec = document.querySelector(".seconds")

let d = new Date();
setInterval(function(){
    let d = new Date();
    let hAngle = d.getHours() * 30;
    let mAngle = d.getMinutes()* 6;
    let sAngle = d.getSeconds()* 6;

    hr.style.transformOrigin="bottom"
    hr.style.transform = "rotate("+(hAngle+mAngle/12)+"deg)";//green-hours
    
    min.style.transformOrigin="bottom"
    min.style.transform = "rotate("+mAngle+"deg)";//cyan-minutes

    sec.style.transformOrigin="bottom"
    sec.style.transform = "rotate("+sAngle+"deg)";//red-seconds
},1000)