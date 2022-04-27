/*
    1. User enters the first number (could be multi-digit)
        a. String concatenation
    2. User presses an operation (addition, subtraction, multiplication, or division)
    3. User enters the second number (could be multi-digit)
    4. User presses = button to see the result
    5. User presses AC button to clear the display (show 0)
    */

    /*
    1. Make 'display' variable
    2. Save 'display' into 'num1' 
    3. Clear 'display' variable
    */

//global variables
let output = "";
let previousNumber;
let currentNumber;
let previousOperator;
let lastOperator;

//number or decimal click
document.getElementById("zero").onclick = function() {display(document.getElementById("zero").innerHTML)};
document.getElementById("one").onclick = function() {display(document.getElementById("one").innerHTML)};
document.getElementById("two").onclick = function() {display(document.getElementById("two").innerHTML)};
document.getElementById("three").onclick = function() {display(document.getElementById("three").innerHTML)};
document.getElementById("four").onclick = function() {display(document.getElementById("four").innerHTML)};
document.getElementById("five").onclick = function() {display(document.getElementById("five").innerHTML)};
document.getElementById("six").onclick = function() {display(document.getElementById("six").innerHTML)};
document.getElementById("seven").onclick = function() {display(document.getElementById("seven").innerHTML)};
document.getElementById("eight").onclick = function() {display(document.getElementById("eight").innerHTML)};
document.getElementById("nine").onclick = function() {display(document.getElementById("nine").innerHTML)};
document.getElementById("decimal").onclick = function() {display(document.getElementById("decimal").innerHTML)};

//operator click
document.getElementById("divide").onclick = function() {clearDisplay(document.getElementById("divide").innerHTML)};
document.getElementById("multiply").onclick = function() {clearDisplay(document.getElementById("multiply").innerHTML)};
document.getElementById("subtract").onclick = function() {clearDisplay(document.getElementById("subtract").innerHTML)};
document.getElementById("add").onclick = function() {clearDisplay(document.getElementById("add").innerHTML)};

//equal click
document.getElementById("equal").onclick = function() {clearDisplay(document.getElementById("equal").innerHTML)};


//clear click
document.getElementById("ac").onclick = function() {clearData()};

//function that displays number
function display(num){
    if(previousOperator == "="){
        clearData();
    }
    
    if(num == "0" && output == ""){

    }
    else{
        if(num != "."){
            output = output + num;
            document.getElementById("display").value = output;
        }
        else if(num == "." && output.includes(".")){
            
        }
        else if(num == "."){
            output = output + num;
            document.getElementById("display").value = output;
        }
    }
}

function clearDisplay(currentOperator){
    //initial condition of calculator
    if(currentNumber == null && previousNumber == null){
        currentNumber = Number(output);
        output = "";
    }
    else if (currentNumber && previousNumber == null){ //runs when first number already inputted and second number is empty
        previousNumber = currentNumber;
        currentNumber = Number(output);
        output = "";
    }
    else if(currentNumber && previousNumber && output != ""){//used when using more than 2 number arithmetic
        currentNumber = Number(output);
        output = "";
    }

    //check for equal sign
    if(currentOperator != "="){
        if(previousOperator == null || previousOperator == "="){ //initial operator
            document.getElementById("display").value = currentOperator;
            previousOperator = currentOperator;
            lastOperator = currentOperator;
        }
        else{
            calculator(previousNumber, previousOperator, currentNumber);
            previousOperator = currentOperator;
            document.getElementById("display").value = currentOperator;
        }
    }
    else if(currentOperator == "=" && previousOperator != "=" && currentNumber != ""){
        calculator(previousNumber, previousOperator, currentNumber);
        previousOperator = currentOperator;
    }
    else if(currentOperator == "=" && previousOperator == "="){
        calculator(previousNumber, lastOperator, currentNumber);
        previousOperator = currentOperator;
    }
}

//calculate new value
function calculator(num1, operator, num2){
    let total;

    if(operator == "+"){
        total = num1 + num2;

        previousNumber = total;
        output = "";

        document.getElementById("display").value = total;
    }
    else if(operator == "-"){
        total = num1 - num2;

        previousNumber = total;
        output = "";

        document.getElementById("display").value = total;
    }
    else if(operator == "/"){
        total = num1 / num2;

        previousNumber = total;
        output = "";

        document.getElementById("display").value = total;
    }
    else{
        total = num1 * num2;

        previousNumber = total;
        output = "";

        document.getElementById("display").value = total;
    }
}

function clearData(){
    document.getElementById("display").value = 0;
    output = "";
    previousNumber = null;
    currentNumber = null;
    previousOperator = null;
    lastOperator = null;
}