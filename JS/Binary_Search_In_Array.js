let arr = [10, 20, 30, 40, 50];

let searchVal = 30;

function binarySearch (){
    for(let i=0 ; i<arr.length ; i++)
        {
            if(arr[i] === searchVal)
            {
                console.log(arr[i]);
            }
        }
}
binarySearch();
