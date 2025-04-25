let num = 12345;

let temp = num;

let firstDigit = 0;
let lastDigit = num % 10;

while(temp !== 0)
{
    firstDigit = temp % 10;
    temp = parseInt(temp / 10);
}
console.log(`First Digit = ${firstDigit}`);

console.log(`Last Digit = ${lastDigit}`);