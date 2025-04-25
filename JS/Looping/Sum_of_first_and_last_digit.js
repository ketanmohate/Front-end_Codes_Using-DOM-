let num = 12345;

let temp = num;

let firstDigit = 0;
let lastDigit = num % 10;

while(temp !== 0)
{
    firstDigit = temp % 10;
    temp = parseInt(temp / 10);
}

let sum = firstDigit + lastDigit;
console.log(`Sum Of First And Last Digit = ${sum}`);
