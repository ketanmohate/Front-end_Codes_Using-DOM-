// Q8.Count Occurrences of Each Element in an Array

let arr = [20, 10, 90, 80, 30, 90, 90, 80];

for(let i=0 ; i<arr.length ; i++)
{
    let visited = false;
    for(let j=0 ; j<arr.length ; j++)
    {
        if(arr[i] === arr[j])
        {
            // count++;
            visited = true;
            break;
        }
    }
    console.log(`${arr[i]}  ---------> ${count}`);
}
