const time = document.querySelector(".watch .time");
const s_btn = document.getElementById("start");
const ss_btn = document.getElementById("stop");
const r_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;
// Event  Listeners
s_btn.addEventListener("click",start);
ss_btn.addEventListener("click",stop);
r_btn.addEventListener("click",reset);
// the calculations 
function timer(){
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;
// Add 0s to number less than 10
if (secs < 10) secs = "0" + secs;
if (mins < 10) mins = "0" + mins;
if (hrs < 10) hrs = "0" + hrs;

 time.innerText = hrs+":"+mins+":"+secs;

}
function start(){
    if(interval){
        return
    }
    interval = setInterval(timer,1000)
}
function stop(){
    clearInterval(interval)
    interval = null;
}
function reset(){
    stop(),
    seconds = 0,
    time.innerText = "00:00:00"
}
