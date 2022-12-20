// let counter = 0
// setInterval( () => {
// counter++
// console.log (counter)
// }, 10) ;

// let btncounter = document.querySelector("#btncounter")
//  let counter = 0
// btncounter.addEventListener('click', function () {
// counter++
// console. log (counter)
// })

let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');
let rundom = document.querySelector(' .rundom');


let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});


rundom.addEventListener("click",()=>{
    Math.rundom()
    //    or
    count = Math.rundom()
    updateDisplay();
}) ;


function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};