function findPairs(arr, targetVal)
{
    let pairs = [];

    for(let i=0 ; i<arr.length ; i++)
    {
        for(let j=i+1 ; j<arr.length ; j++)
        {
            if(arr[i] + arr[j] === targetVal)
            {
                // console.log(`[ ${i} , ${j} ]`);
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

let arr = [10, 20, 4,4, 70, 6,2];
let targetVal = 8;

console.log(findPairs(arr, targetVal));

