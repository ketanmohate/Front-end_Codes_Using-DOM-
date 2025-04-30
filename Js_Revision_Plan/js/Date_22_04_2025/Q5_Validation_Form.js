let form = document.querySelector(".form");
let button = document.querySelector(".button");

let fullName = document.querySelector("#name");
let email = document.querySelector("#email");
let contact = document.querySelector("#contact");
let adhar = document.querySelector("#adhar");
let DOB = document.querySelector("#DOB");
let PAN = document.querySelector("#PAN");
let password = document.querySelector("#password");
let CPassword = document.querySelector("#CPassword");

fullName.addEventListener("keyup",()=>{
 
    let val = fullName.value;
    let flag = true;

    for (let i = 0; i < val.length; i++) {
        let ch = val.charCodeAt(i);
        if (!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122) || ch === 32)) {
            flag = false;
            break;
        }
    }
    if(flag){
        fullName.style.color = "black";
    }
    else{
        fullName.style.color = "red";
    }
});

email.addEventListener("keyup", ()=>{

    console.log("Hello");
    let val = email.value;

    let atSign = 0;

    for(let i=0 ; i<val.length ; i++){

        let ch = val.charCodeAt(i);
        console.log(ch);

        if(ch === 64){
            ++atSign;
            break;
        }
    }

    if(atSign===1){
        fullName.style.color = "Black";
    }
    else{
        fullName.style.color = "red";
    }
});

