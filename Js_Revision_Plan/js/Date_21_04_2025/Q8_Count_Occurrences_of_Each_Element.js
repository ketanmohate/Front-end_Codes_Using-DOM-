// Q8.Count Occurrences of Each Element in an Array

let arr = [20, 10, 90, 80, 30, 90, 90, 80];

for(let i=0 ; i<arr.length ; i++)
{
    let visited = false;
    let count = 0;

    for(let j=0 ; j<i ; j++)
    {
        if(arr[i] === arr[j])
        {
            visited = true;
            break; 
        }
    }

    if(visited) {
        continue;
    }

    for(let k = i ; k<arr.length ; k++){
        if(arr[k] == arr[i]){
            count++;
        }
    }

    console.log(`${arr[i]}  ---------> ${count}`);
}
