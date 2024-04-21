const endDateInput = document.querySelector("[end-date]");
const timeLeft = document.querySelector("[time-left]");
const start = document.querySelector("[start]");

let timeTrue = true
let interval

let savedEndTime = localStorage.getItem("countdown")
if(savedEndTime){
    let end = new Date(savedEndTime);
    endDateInput.value = end.toISOString().substring(0, 10);
    timeLeft.innerHTML=''
    startTimer(end,timeTrue)
    
}

    endDateInput.addEventListener('change',function(){
        startTimer(0,0) //Kills the previous timer
        localStorage.removeItem(("countdown")) //removes local stoeage item
        let date = endDateInput.value
        let dateFormat =  new Date(`${date}`);
        let today = new Date();
        let now = dateFormat - today;
        if(now <= 0){
            timeLeft.innerHTML= 'Enter Valid date'
            timeTrue = false
            return
        }
        let end = dateFormat;
        localStorage.setItem("countdown",end)
        //if end == today error or input = '' empty error
        startTimer(end,timeTrue)
        
    })




    
function startTimer(end,timeTrue){
    if(timeTrue){
        interval = setInterval(()=>{
            timer(end)
        },1000)
        
    }else{
        clearInterval(interval)
        
        }
       
} 

function timer(end){
    let today = new Date();
    let now = end - today;
    // console.log(now)
    let days = Math.floor(now / (1000 * 60 * 60 * 24));
    let hours =Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let min = Math.floor((now % (1000 * 60 * 60 )) / (1000 * 60 ));
    let sec = Math.floor((now % (1000 * 60 )) / (1000 ));
    // console.log(`${days} days ${hours} Hours ${min} Minutes ${sec} Seconds Left`)
    timeLeft.innerHTML= `${days} days ${hours} Hours ${min} Minutes ${sec} Seconds Left`;  
}


