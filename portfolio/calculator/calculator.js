let display = document.getElementById("inp")


let btn=(number)=>{
     display.value += number;
}
let btneq=()=>{
try{
    display.value=eval(display.value)
}
catch(err){
    alert|("invalid")
}
}
function clr(){
    display.value = " "
}
function del(){
    display.value = display.value.slice(0,-1)
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
  