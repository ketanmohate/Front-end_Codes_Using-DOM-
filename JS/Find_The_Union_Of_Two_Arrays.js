function unionArrays(arr1, arr2) {
    let union = [];

    for (let i = 0; i < arr1.length; i++) 
    {
        let found = false;
        for (let k = 0; k < union.length; k++) 
        {
            if (arr1[i] === union[k]) 
            {
                found = true;
                break;
            }
        }
        if (!found) 
        {
            union[union.length] = arr1[i];
        }
    }

    for (let j = 0; j < arr2.length; j++) 
    {
        let found = false;
        for (let k = 0; k < union.length; k++) 
        {
            if (arr2[j] === union[k]) 
            {
                found = true;
                break;
            }
        }
        if (!found) 
        {
            union[union.length] = arr2[j];
        }
    }

    return union;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

let result = unionArrays(arr1, arr2);

console.log(result);
