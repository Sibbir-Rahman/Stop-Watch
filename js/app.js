
const startCountDown = document.getElementById('start')
const resetCountDown = document.getElementById('reset')
const stopCountDown = document.getElementById('stop')
const minute = document.getElementById('minute')
const seconds = document.getElementById('second')

let min;
let sec = 0;
let timer = null;
let workIsRunning = false;

function start(){
    if(!workIsRunning){
        workIsRunning = true
        timer = setInterval(function(){
            sec++
    
            let {min, second} = getTime(sec)
    
            minute.textContent = min < 10 ? ('0' + min) : min;
            seconds.textContent = second < 10 ? ('0' + second) : second;
        }, 1000)
    }
}

function reset(){
    workIsRunning = false;

    clearInterval(timer)
    min = 0;
    sec = 0;
    minute.textContent = '00';
    seconds.textContent = '00';
    
}
function stop(){
    workIsRunning = false;

    clearInterval(timer);
    
}

function getTime(sec){
    min = parseInt(sec / 60);
    let second = parseInt(sec % 60);

    return{
        min,
        second
    }
}

startCountDown.addEventListener('click', start);
resetCountDown.addEventListener('click', reset);
stopCountDown.addEventListener('click', stop);