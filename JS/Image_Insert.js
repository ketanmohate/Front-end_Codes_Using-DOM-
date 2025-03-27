let btn = document.querySelector("#btn");
let box_img = document.querySelector(".box_img");

let imgIndex = 1; 

btn.addEventListener("click", () => {
    if (imgIndex > 10) {
        alert("All images are added!");
        return; 
    }

    let wrapper = document.createElement("div"); 
    wrapper.style.display = "inline-block";
    wrapper.style.textAlign = "center";
    wrapper.style.margin = "5px";

    let img = document.createElement("img");
    img.src = `/Images/horizontal/${imgIndex}.jpg`; 
    img.style.width = "150px"; 
    img.style.display = "block";

    let removeBTN = document.createElement("button");
    removeBTN.innerHTML = "❌";
    removeBTN.style.display = "block";
    removeBTN.style.margin = "5px 0px 0px 65px";

    wrapper.appendChild(img);
    wrapper.appendChild(removeBTN);
    box_img.appendChild(wrapper);

    removeBTN.addEventListener("click", () => {
        wrapper.remove(); 
        // i--;
    });

    imgIndex++;
});
 