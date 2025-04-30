let wapper = document.querySelector(".wapper");
let btn = document.querySelector("#btn");

btn.addEventListener("click", ()=>{
    console.log("hello");

    let existingHeading = document.querySelector(".heading");
    if (existingHeading) {
        existingHeading.remove();
    }

    let heading = document.createElement("h1");
    heading.innerHTML = "Hello JavaScript....!";
    heading.classList.add("heading");

    wapper.appendChild(heading);
});