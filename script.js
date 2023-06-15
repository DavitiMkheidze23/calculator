let slider = document.querySelector(".slider");
let h1 = document.querySelector(".calc");
let theme = document.querySelector(".theme");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let input = document.querySelector(".input");
let secondDiv = document.querySelector(".second-div");
let button = document.querySelectorAll(".button");
let btn7 = document.querySelector(".btn7");
let btn8 = document.querySelector(".btn8");
let btn9 = document.querySelector(".btn9");
let delButton = document.querySelector(".del-button");
let btn4 = document.querySelector(".btn4");
let btn5 = document.querySelector(".btn5");
let btn6 = document.querySelector(".btn6");
let plusBtn = document.querySelector(".plus-button");
let btn3 = document.querySelector(".btn3");
let btn2 = document.querySelector(".btn2");
let btn1 = document.querySelector(".btn1");
let minusBtn = document.querySelector(".minus-button");
let dotBtn = document.querySelector(".dot-button");
let btn0 = document.querySelector(".btn0");
let devideBtn = document.querySelector(".devide-button");
let multiplyBtn = document.querySelector(".multiply-button");
let resetBtn = document.querySelector(".reset-button");
let equalBtn = document.querySelector(".equal-button");
const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".number");
slider.addEventListener('input', function lightTheme(){
    if(slider.value == 2 ){
        document.body.style.backgroundColor = "#E6E6E6"
        h1.classList.add("calc-light");
        theme.classList.add("theme-light");
        p1.classList.add("p-light")
        p2.classList.add("p-light")
        p3.classList.add("p-light")
        slider.classList.add("slider-light")
        input.classList.add("input-light")
        secondDiv.classList.add("second-div-light")
        delButton.classList.add("del-button-light")
        delButton.classList.add("del-button-light:hover")
        resetBtn.classList.add("reset-button-light")
        resetBtn.classList.add("reset-button-light:hover")
        equalBtn.classList.add("equal-button-light")
        equalBtn.classList.add("equal-button-light:hover")
        slider.style.setProperty('--dark-theme', '#C85402');
        for(let i = 0 ; i < button.length ; i++){
            button[i].classList.add("button-light")
        }

        h1.classList.remove("calc-neon");
        theme.classList.remove("theme-neon");
        p1.classList.remove("p-neon")
        p2.classList.remove("p-neon")
        p3.classList.remove("p-neon")
        slider.classList.remove("slider-neon")
        input.classList.remove("input-neon")
        secondDiv.classList.remove("second-div-neon")
        delButton.classList.remove("del-button-neon")
        resetBtn.classList.remove("reset-button-neon")
        equalBtn.classList.remove("equal-button-neon")
        for(let i = 0 ; i < button.length ; i++){
            button[i].classList.remove("button-neon")
        }
    }
    if(slider.value == 1){
        document.body.style.backgroundColor = "#3A4663"
        h1.classList.remove("calc-light");
        theme.classList.remove("theme-light");
        p1.classList.remove("p-light")
        p2.classList.remove("p-light")
        p3.classList.remove("p-light")
        slider.classList.remove("slider-light")
        input.classList.remove("input-light")
        secondDiv.classList.remove("second-div-light")
        delButton.classList.remove("del-button-light")
        resetBtn.classList.remove("reset-button-light")
        equalBtn.classList.remove("equal-button-light")
        slider.style.setProperty('--dark-theme', '#D03F2F');
        for(let i = 0 ; i < button.length ; i++){
            button[i].classList.remove("button-neon")
        }
        for(let i = 0 ; i < button.length ; i++){
            button[i].classList.remove("button-light")
        }
        h1.classList.remove("calc-neon");
        theme.classList.remove("theme-neon");
        p1.classList.remove("p-neon")
        p2.classList.remove("p-neon")
        p3.classList.remove("p-neon")
        slider.classList.remove("slider-neon")
        input.classList.remove("input-neon")
        secondDiv.classList.remove("second-div-neon")
        delButton.classList.remove("del-button-neon")
        resetBtn.classList.remove("reset-button-neon")
        equalBtn.classList.remove("equal-button-neon")
    }
    if(slider.value == 3){
        document.body.style.backgroundColor = "#17062A"
        h1.classList.add("calc-neon");
        theme.classList.add("theme-neon");
        p1.classList.add("p-neon")
        p2.classList.add("p-neon")
        p3.classList.add("p-neon")
        slider.classList.add("slider-neon")
        input.classList.add("input-neon")
        secondDiv.classList.add("second-div-neon")
        delButton.classList.add("del-button-neon")
        delButton.classList.add("del-button-neon:hover")
        resetBtn.classList.add("reset-button-neon")
        resetBtn.classList.add("reset-button-neon:hover")
        equalBtn.classList.add("equal-button-neon")
        equalBtn.classList.add("equal-button-neon:hover")
        slider.style.setProperty('--dark-theme', '#00DED0');
        for(let i = 0 ; i < button.length ; i++){
            button[i].classList.add("button-neon")
            button[i].classList.add("button-neon:hover")
        }
    }
})
 
resetBtn.addEventListener('click', function reset(){
    input.value = "";
    numbersArray = [];
    operatorsString = "";
    output = ""
})
delButton.addEventListener('click', function del(){
   let delFunction = input.value.slice(0, -1)
   input.value = delFunction
})
let numbersArray = [];
let operatorsString = "";
let output = "";
let equal = "";
numbers.forEach((number) => {
    number.addEventListener('click', function(){
        input.value += number.innerHTML;
        output += number.innerHTML;
        console.log(number.innerHTML)
    })});
function operatorsOnClick(oper){
        numbersArray.push(output)
        input.value += oper;
        operatorsString += oper;
        numbersArray.push(operatorsString);
        operatorsString = "";
        output = "";
        console.log(numbersArray);
    }
equalBtn.addEventListener('click', function equal(){
    numbersArray.push(output)
    let equal = numbersArray.join('');
    let final = equal.replace(",", "");
    let test = eval(final);
    input.value = test;
})