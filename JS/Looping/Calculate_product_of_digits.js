let num = 12345;

let prod = 1;

while(num !== 0)
{
    let digit = num % 10;
    prod = prod * digit;
    num = parseInt(num / 10);
}

console.log(prod);