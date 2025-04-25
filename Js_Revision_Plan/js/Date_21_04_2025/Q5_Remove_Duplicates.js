// Q5.Remove Duplicates from an Array

let arr = [20, 10, 60, 80, 30, 90, 90, 80];

for(let i=0 ; i<arr.length ; i++)
{
    for(let j=i+1 ; j<arr.length ; j++)
    {
        if(arr[i] == arr[j])
        {
            arr.splice(j, 1);
            j--; 
        }
    }
}
console.log(arr);