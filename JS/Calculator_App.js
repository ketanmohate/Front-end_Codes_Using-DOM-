let input = document.querySelector("#input");

let percentage = document.querySelector("#percentage");
let CE = document.querySelector("#CE");
let C = document.querySelector("#C");
let back = document.querySelector("#back");
let division = document.querySelector("#division");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let multiplication = document.querySelector("#multiplication");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let minus = document.querySelector("#minus");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let plus = document.querySelector("#plus");
let plus_minus = document.querySelector("#plus_minus");
let zero = document.querySelector("#zero");
let dot = document.querySelector("#dot");
let equal_to = document.querySelector("#equal_to");

let value = "";
let firstNumber = null;
let operator = null;

function printVal(val) {
    console.log(val);
}

function add(val) {
    value = input.value += val;
    printVal(value);
}

C.addEventListener("click", () => {
    value = "";
    firstNumber = null;
    operator = null;
    input.value = "";
    printVal(value);
});

CE.addEventListener("click", () => {
    value = "";
    input.value = "";
    printVal(value);
});

back.addEventListener("click", () => {
    value = input.value = input.value.slice(0, -1);
    printVal(value);
});

// Number button event listeners
[one, two, three, four, five, six, seven, eight, nine, zero].forEach((btn) => {
    btn.addEventListener("click", () => {
        add(btn.innerText);
    });
});

// Operation buttons
[plus, minus, multiplication, division].forEach((btn) => {
    btn.addEventListener("click", () => {
        firstNumber = parseFloat(input.value);
        operator = btn.innerText;
        value = "";
        input.value = "";
        printVal(`${firstNumber} ${operator}`);
    });
});

// Equals button
equal_to.addEventListener("click", () => {
    let secondNumber = parseFloat(input.value);

    if (firstNumber !== null && operator !== null) {
        let result;
        switch (operator) {
            case "+":
                result = firstNumber + secondNumber;
                break;
            case "-":
                result = firstNumber - secondNumber;
                break;
            case "×":
                result = firstNumber * secondNumber;
                break;
            case "÷":
                result = secondNumber !== 0 ? firstNumber / secondNumber : "Error";
                break;
            default:
                result = "Error";
        }

        input.value = result;
        printVal(result);

        // Reset values
        firstNumber = null;
        operator = null;
    }
});
