let num = 121;

let temp = num;

rev = 0;

while(num !== 0)
{
    let rem = num % 10;
    rev = (rev * 10) + rem ;
    num = parseInt(num / 10);
}

if(temp == rev)
{
    console.log("Number Is Palindrome");
}
else{
    console.log("Number Is Not Palindrome");
}