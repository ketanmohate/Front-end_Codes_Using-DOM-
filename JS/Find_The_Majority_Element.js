function findMajorityElement(arr) 
{
    let n = arr.length / 2;
    let count = 0;
    let found = false;

    for (let i = 0; i < arr.length; i++)
    {
        count = 0;
        for (let j = 0; j < arr.length; j++) 
        {
            if (arr[i] === arr[j]) 
            {
                ++count;
            }
        }
        if (count > n) 
        {
            console.log(arr[i]);
            found = true;
            break;  
        }
    }

    if (!found) 
    {
        console.log("No Majority Element");
    }
}

let arr = [20, 10, 10, 40, 10, 20, 10, 10];
findMajorityElement(arr);
