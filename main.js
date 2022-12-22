let seconds = 00;
let tens = 00;
let outputSecond = document.getElementById(`second`);
let outputTens = document.getElementById(`tens`);
let buttonStart = document.getElementById(`btn-start`);
let buttonStop = document.getElementById(`btn-stop`);
let buttonReset = document.getElementById(`btn-reset`);
let interval;
buttonStart.addEventListener(`click`,function(){
    clearInterval(interval);
    interval = setInterval(startTime, 10);
})
buttonStop.addEventListener(`click`,function(){
    clearInterval(interval)
})

buttonReset.addEventListener(`click`, function(){
    clearInterval(interval);
    tens ="00";
    seconds="00"
    outputSecond.innerHTML = seconds;
    outputTens.innerHTML = tens;

})
function startTime(){
    tens++;
    if(tens<=9){
        outputTens.innerHTML = '0'+tens;
    }
    if(tens > 9){
        outputTens.innerHTML = tens;
    }
     if(tens > 99){
        seconds++;
        outputSecond.innerHTML = '0'+seconds;
        tens = 0;
        outputTens.innerHTML = '0'+ tens;

    }
     if(seconds > 9){
        outputSecond.innerHTML = seconds
    }
}