"use stript";

let date = ["大吉","吉","中吉","小吉","末吉","凶","大凶"];

function btn(){
    let date_p = document.getElementById("date-p");
    let name = document.getElementById("name").value;
    if(name !== ""){
    let un = Math.floor(Math.random() * 7);
    date_p.textContent = `${name}さんの運勢は${date[un]}`;
    
    }

}