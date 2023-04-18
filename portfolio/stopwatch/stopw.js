const time = document.querySelector(".watch .time");
const s_btn = document.getElementById("start");
const ss_btn = document.getElementById("stop");
const r_btn = document.getElementById("reset");

let seconds = 0;
// Event  Listeners
s_btn.addEventListener("click",start);
ss_btn.addEventListener("click",stop);
r_btn.addEventListener("click",reset);


let hours = 0
let minutes = 0
let t = 0
function stopp(){
seconds++;
if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60)
minutes = 0,
    
 hours++;
    
   
}


let h = hours < 10 ? "0" + hours : hours;
let m = minutes < 10 ? "0" + minutes  : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;

time.innerText = h+":"+m+":"+s;

    


}
function start(){
 t = setInterval(stopp,1000)



}
function stop(){
    clearInterval(t)
}
function reset(){
    clearInterval(t);
    time.innerHTML="00:00:00"
}


