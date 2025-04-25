let arr = [10, 20, 30, 40, 20, 10, 60];

let find = false;

for(let i=0 ; i<arr.length ; i++)
{
    for(let j=i+1 ; j<arr.length ; j++)
    {
        if(arr[i] === arr[j])
        {
            console.log(arr[i]);
            find = true;
            break;
        }
        if(find === true)
        {
            break;
        }
    }
    if(find === true)
    {
        break;
    }
}