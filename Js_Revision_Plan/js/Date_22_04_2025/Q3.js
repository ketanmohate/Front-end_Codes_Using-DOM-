let sum = (...x)=>{
    let sum = 0;
    x.forEach((val)=>{
         sum = sum + val;
    })
    return sum;
}

let result = sum(50,50,10);
console.log(result);