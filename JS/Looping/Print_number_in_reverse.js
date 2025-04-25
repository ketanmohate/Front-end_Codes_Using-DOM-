let num = 12345;

rev = 0;

while(num !== 0)
{
    let rem = num % 10;
    rev = (rev * 10) + rem ;
    num = parseInt(num / 10);
}

console.log(rev);