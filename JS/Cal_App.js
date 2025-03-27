let input = document.querySelector("#input");

let arrSymbols = [
    ['%', 'CE', 'C', '⌫'],
    ['1/x', 'x²', '√x', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['+/-', '0', '.', '=']
];

let str = "";
let firstVal;
let secondVal;
let result;
let choice;

let table = document.querySelector("#table");

for (let i = 0; i < arrSymbols.length; i++) 
{
    let tr = document.createElement("tr");

    for (let j = 0; j < arrSymbols[i].length; j++)
    {
        let td = document.createElement("td");
        let btn = document.createElement("button");

        btn.setAttribute("type", "button");
        btn.setAttribute("value", arrSymbols[i][j]);
        btn.setAttribute("id", `btn-${i}-${j}`);
        btn.textContent = arrSymbols[i][j];

        btn.addEventListener("click", () => {
            if (input.value === "0") {
                input.value = "";
            }

            let btnValue = btn.value;
            str = input.value;

            if (btnValue === '+') 
            {
                firstVal = str;
                choice = 1;
                input.value = "";
            } 
            else if (btnValue === '-') 
            {
                firstVal = str;
                choice = 2;
                input.value = "";
            }
            else if (btnValue === 'x') 
            {
                firstVal = str;
                choice = 3;
                input.value = "";
            }
            else if (btnValue === '÷') 
            {
                firstVal = str;
                choice = 4;
                input.value = "";
            }
            else if (btnValue === '1/x') 
            {
                if (input.value === "0" || input.value === "") 
                {
                    alert("Cannot divide by zero");
                } 
               else 
                {
                    result = 1 / parseFloat(input.value);
                    input.value = result;
                }
            }   
            else if (btnValue === 'x²') 
                {
                    if (input.value === "") 
                    {
                        alert("Please enter a number first");
                    } 
                    else 
                    {
                        let num = parseFloat(input.value);
                        result = num * num; // Manual squaring
                        input.value = result;
                    }
                }
                else if (btnValue === '√x') 
                {
                    if (input.value === "") 
                    {
                        alert("Please enter a number first");
                    } 
                    else if (parseFloat(input.value) < 0) 
                    {
                        alert("Invalid input: Square root of a negative number is undefined");
                    } 
                    else 
                    {
                        result = Math.sqrt(parseFloat(input.value));
                        input.value = result;
                    }
                }
                             
            else if (btnValue === '%') 
            {
                firstVal = str;
                choice = 5;
                input.value = "";
            }
            else if (btnValue === '+/-') 
                {
                    if (input.value !== "") 
                    {
                        let num = parseFloat(input.value);
                        input.value = -num; 
                    }
                }                
            else if(btnValue === 'CE')
            {
                input.value = "";
            }
            else if (btnValue === 'C') 
            {
                input.value = "0";
                str = "";
            }
            else if (btnValue === '⌫') 
            {
                input.value = input.value.slice(0, -1);
            }               
            else if (btnValue === '=') 
                {
                    secondVal = input.value;
                    switch (choice) 
                    {
                        case 1:
                            result = parseFloat(firstVal) + parseFloat(secondVal);
                            break;
                        case 2:
                            result = parseFloat(firstVal) - parseFloat(secondVal);
                            break;
                        case 3:
                            result = parseFloat(firstVal) * parseFloat(secondVal);
                            break;
                        case 4:
                            result = parseFloat(firstVal) / parseFloat(secondVal);
                            break;
                        case 5:
                            result = (parseFloat(firstVal) * parseFloat(secondVal)) / 100;
                            break;
                        default:
                            alert("Invalid operation");
                            return;
                    }
                    input.value = result;
                } 
            else 
            {
                str = str + btnValue;
                input.value = str;
            }
        });

        td.appendChild(btn);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
