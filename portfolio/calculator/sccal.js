let display = document.getElementById("inp")
let dis = document.getElementById("input")



let btn = (number) => {
     display.value += number;

}
let btneq=()=>{
try{
    // dis.innerText = display.value;
    display.value = eval(display.value)
    dis.value = display.value

// dis.innerText  = display.value += number 

}
catch(err){
    alert|("invalid")
}
}
function clr(){
    display.value = " "
    dis.value = " "

}
function del(){
    display.value = display.value.slice(0,-1)
}
function sin(){
    display.value = Math.sin((display.value * Math.PI) / 180 );
}
function cos(){
    display.value = Math.cos((display.value * Math.PI) / 180 );
}
function tan(){
    display.value = Math.tan((display.value * Math.PI) / 180 );
}
function pow(){
    display.value = Math.pow(display.value,2);
}
function sqrt(){
    display.value = Math.sqrt(display.value,2);
}
function log(){
    display.value = Math.log(display.value);
}
function pi(){
    if (display.value == " ")
    display.value = Math.PI
    else
    display.value = display.value + Math.PI;
}
function per(){
    display.value = display.value / 100;
}
function inverse(){
    display.value = 1 / display.value
}
function raise3(){
    display.value = Math.pow(display.value,3);
}
function fact(){
    var f, num, i;
    f = 1
    num = display.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
        
    }
    i = i - 1;
    display.value = f

}







// class calcuator{
//     constructor(previous, current){
//         this.previous = previous
//         this.current = current
//     }
//     equal(){

//     }

// }

// const numbers = document.querySelectorAll("[data-number]")
// const operators = document.querySelectorAll("[data-operation]")
// const equal = document.querySelectorAll("[data-equal]")
// const previous = document.querySelectorAll("[data-previous]")
// const current = document.querySelectorAll("[data-current]")
  