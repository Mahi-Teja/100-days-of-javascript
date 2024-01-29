
const birthdateInput = document.getElementById('birthdate');
const output = document.querySelector(".output");
const daysLeftOutput = document.querySelector(".daysLeftOutput");

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth()+1;
let currentDay = currentDate.getDate();
let time = currentDate.getTime();

const days30 = [4,6,9,11];
const days31 = [1,3,5,7,8,10,12];
let Leap = false;
if((currentYear%4 ==0 && currentYear%100 != 0) || currentYear%400==0) {
     Leap = true;
}

/// no.of days in a month
if(days30.includes(currentMonth)){
    daysOfMonth = 30;
}else if(days31.includes(currentMonth)){
    daysOfMonth = 31;
}else{
    if(Leap){
        daysOfMonth = 29;
    }else
        daysOfMonth = 28;
}


function calculateAge() {
    if(birthdateInput.value==""){
        alert("Enter Date of Birth")
    }
    else{
        const selectedDate = new Date(birthdateInput.value);
    
        // // Extract the user's birth year and month
        const birthYear = selectedDate.getFullYear();
        const birthMonth = selectedDate.getMonth() + 1; // Adding 1 because months are zero-based
        const birthDay = selectedDate.getDate();
        
        if(selectedDate>currentDate){
            output.innerHTML ="Not Born Yet."

        }
        else{
            let ageYear = currentYear - birthYear;

            if(birthMonth < currentMonth){
                ageMonth = currentMonth- birthMonth ;
            }else if(birthMonth > currentMonth ){
                ageYear--;
                ageMonth = (currentMonth - birthMonth )+ 12;
            }else{
                ageMonth = 0;
                
            }
            if(birthDay > currentDay){
                ageMonth--;
                ageDay = (currentDay - birthDay) + daysOfMonth;
                ageDay--;

            }else if(birthDay<currentDay){
                ageDay = currentDay - birthDay
                ageDay--;
            }else{
                ageDay = 0;
            }

            output.innerHTML ="Age is: "+ ageYear+" years "+ageMonth+" months "+ageDay+" days"
        // console.log(ageYear+" years "+ageMonth+" months "+ageDay+" days")
            }
    }
    
}
