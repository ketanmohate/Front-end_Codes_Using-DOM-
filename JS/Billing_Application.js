let output = document.querySelector(".output");

let qty = document.querySelector("#qty");
let rate = document.querySelector("#rate");

let withoutGST = document.querySelector("#withoutGST");
let GST = document.querySelector("#GST");
let withgGST = document.querySelector("#withgGST");

let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    let a = parseInt(qty.value.trim()) || 0;  
    let b = parseInt(rate.value.trim()) || 0; 

    let sum = a * b;
    withoutGST.innerHTML = `Bill Without GST = ${sum}`; 

    let gstAmount = sum * 0.18;
    GST.innerHTML = `GST = ${gstAmount.toFixed(2)}`;

    let totalWithGST = sum + gstAmount;
    withgGST.innerHTML = `Bill With GST = ${totalWithGST.toFixed(2)}`;
});
