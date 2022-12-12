let seconds=00;
let tens=00;
let minutes=00;
const getSeconds=document.querySelector('.seconds')
const getTens=document.querySelector('.tens')
const getMinutes=document.querySelector('.minutes')
const btnStar=document.querySelector('.start-btn');
const btnStop=document.querySelector('.stop-btn');
const btnReset=document.querySelector('.reset-btn');
let Interval;

btnStar.addEventListener('click',()=>{
clearInterval(Interval);
Interval=setInterval(startTime, 20);
});

btnStop.addEventListener('click',()=>{
    clearInterval(Interval);
});

btnReset.addEventListener('click',()=>{
clearInterval(Interval);
tens=00;
seconds=00;
minutes=00;
getSeconds.innerHTML=00;
getTens.innerHTML=00;
getMinutes.innerHTML=00;
});

function startTime(){
    tens++
    if(tens<=9){
        getTens.innerHTML = "0" +  tens;
       
    }
    if(tens>9){
        getTens.innerHTML = tens;
    }
    if(tens > 59){
        seconds++
        getSeconds.innerHTML = "0"+ seconds;
        tens=0;
        getTens.innerHTML = "0"+ tens
    }
    
    if(seconds > 9){
        getSeconds.innerHTML= seconds;
    }
if(seconds>59){
    minutes++
    getMinutes.innerHTML="0" +minutes
    seconds=0;
    getSeconds.innerHTML="0"+seconds
}

    }
