const time = document.getElementById("timer");
const timer = setInterval(myTime, 1000)
function myTime(){    
    time.textContent -= 1;
    if (+time.textContent === 0){
        clearInterval(timer) 
        alert("You WIN")            
    }
}






