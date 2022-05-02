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
    //this is the case where user clicks on the equal sign then presses the number so all data should be cleared
    if(previousOperator == "="){
        clearData();
    }
    
    //this is to prevent multiple 0's at the beginning of the display ex: 0000
    if(num == "0" && output == ""){

    }
    else{
        if(num != "."){ //checks for the decimal and outputs the number
            output = output + num;
            document.getElementById("display").value = output;
        }
        else if(num == "." && output.includes(".")){ //if the output already has the decimal then it does nothing
            
        }
        else if(num == "."){ //if output doesn't have the decimal then it adds it
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
        if(previousOperator == null || previousOperator == "="){ //initial operator or new operator pressed right after the equal sign
            document.getElementById("display").value = currentOperator;
            previousOperator = currentOperator;
            lastOperator = currentOperator;
        }
        else{ //case of last operator and current operator were both not equal sign so multiple number operation
            calculator(previousNumber, previousOperator, currentNumber);
            previousOperator = currentOperator;
            document.getElementById("display").value = currentOperator;
        }
    }
    else if(currentOperator == "=" && previousOperator != "=" && currentNumber != ""){ //user presses an operator right after equal then presses a number
        calculator(previousNumber, previousOperator, currentNumber);
        previousOperator = currentOperator;
    }
    else if(currentOperator == "=" && previousOperator == "="){ //case where user presses equal button right after pressing it
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

//clears and resets all variables/display
function clearData(){
    document.getElementById("display").value = 0;
    output = "";
    previousNumber = null;
    currentNumber = null;
    previousOperator = null;
    lastOperator = null;
}