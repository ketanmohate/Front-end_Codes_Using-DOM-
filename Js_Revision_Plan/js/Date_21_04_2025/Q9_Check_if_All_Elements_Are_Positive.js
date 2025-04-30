// Q9.Check if All Elements Are Positive

let arr = [1,3,4,0,6,7,9];

let flag = true;

for(let i = 0 ; i<arr.length ; i++){
    if(arr[i]<0){
        flag = false;
    }
}
if(flag){
    console.log("All elements Are Positive");
}
else{
    console.log("All Elements Are not Positive")
}