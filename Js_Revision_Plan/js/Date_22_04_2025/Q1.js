let btn = document.querySelector("#btn");
let wapper = document.querySelector("#wapper");

btn.addEventListener("click", ()=>{
    console.log("hello");
    let textBox = document.createElement("input");
    textBox.placeholder = "Write Somthing...";
    wapper.appendChild(textBox);
});