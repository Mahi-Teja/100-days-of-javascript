const todayIs = document.querySelector("[today-is]");
const line = document.querySelector("[punch-line]");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 
const d = new Date();
const today = d.getDay();
let punchLine;
switch(today){
    case 0 :
        punchLine = " Its Fun Day"
        break;
    case 1 :
        punchLine = "co'Mon work day"
        break;
    case 2 :
        punchLine = "Its a Tacos Day"
        break;
    case 3 :
        punchLine = "when iz the weekend day"
        break;
    case 4 :
        punchLine = "two days for the weekend"
        break;
    case 5 :
        punchLine = "Knocking on weekend"
        break;
    case 6 :
        punchLine = "Lets Party yay!"
        break;
}

todayIs.innerHTML = weekDays[today] 
line.innerHTML = punchLine