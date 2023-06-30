const start = document.querySelector('#start')
const end = document.querySelector('#end')
const pause = document.querySelector('#pause')
const counter = document.querySelector('#counter')

let sec = 0, min = 0, hour = 0

start.addEventListener('click', changeTime)
end.addEventListener('click', clearTime)
pause.addEventListener('click', pauseTime)


function changeTime(){
    console.log('Timer is start')

    interval = setInterval(countTime, 1000)
    start.disabled = true
    pause.disabled = false
}

function countTime(){
    sec++
    console.log(sec)

    if (sec === 60){
        sec = 0
        min++
    }
    if (min === 60){
        min = 0
        hour++
    }

    drawTime()
    
}

function drawTime(){
    counter.innerHTML = `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`
}

function pauseTime(){
    clearInterval(interval);
    start.disabled = false
    pause.disabled = true
}

function clearTime(){
    console.log('Timer is end')

    clearInterval(interval);
    start.disabled = false
    pause.disabled = false
    sec = 0, min = 0, hour = 0
    counter.innerHTML = '00:00:00'
}

