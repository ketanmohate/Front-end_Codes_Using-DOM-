// let input = document.querySelector(".input");

let table = document.querySelector(".table");

let btn = document.querySelector(".btn");

let num = document.querySelector("#num");

btn.addEventListener("click", () => {

    let value = parseInt(num.value.trim());

    table.innerHTML = "";

    let tab = document.createElement("table");

    for(let i=1 ; i<=value ; i++)
    {
        let tr = document.createElement("tr");

        for(let j=1 ; j<=10 ; j++)
        {
            let td = document.createElement("td");
            // td.innerHTML=`${j} * ${i} = ${j*i}`;
            td.innerHTML=j*i;
            tr.append(td);
        }
        tab.append(tr);
    }
    table.appendChild(tab)
});