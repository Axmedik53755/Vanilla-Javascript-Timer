
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const dots = document.getElementById('dots')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')
const myAudio = document.getElementById("myAudio");


let second = 0;
let minute = 0;
const starting = () => {
    const timer = setInterval(() => {
        sec.innerHTML = second++
        if (second === 60) {
            second = 0
            sec.innerHTML = 0
            min.innerHTML = minute += 1
            myAudio.play();
        }
        if (minute === 60) {
            sec.innerHTML = 0
            min.innerHTML = 0
            myAudio.play();
            clearInterval(timer)
        }
        if (second % 2 === 0) {
            dots.style.opacity = "0"
        } else {
            dots.style.opacity = "1"
        }
    }, 1000)
    stop.addEventListener('click', stoping);
    function stoping() {
        clearInterval(timer)
    }
    function resetTime() {
        sec.innerHTML = 0
        min.innerHTML = 0
        clearInterval(timer)
    }
    reset.addEventListener('click', resetTime);
}
start.addEventListener('click', starting);
