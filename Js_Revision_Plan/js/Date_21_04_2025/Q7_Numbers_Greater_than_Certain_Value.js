// Q7.Find All Numbers Greater Than a Certain Value

let arr = [20, 10, 60, 80, 30, 90, 90, 80];

let val = 30;

arr.forEach(element => {
    if(element > val)
    {
        console.log(element);
    }
});
