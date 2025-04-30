let arr = [20,40,50,10,80,50];

let element = 50;

let found = false;

for(let i=0 ; i<arr.length ; i++){
    if(arr[i] == element){
        found = true;
        console.log(`Index is: ${i}`);
    }
}

if(!found){
    console.log("Element Are not Present in Array");
}