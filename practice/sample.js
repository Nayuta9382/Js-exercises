"use strict"
function btnClick1(){
    calc("グー");

}
function btnClick2(){
    calc("チョキ");
}
function btnClick3(){
    calc("パー");
}
function calc(name){
    let youValue = document.getElementById("you-value");
    let comValue = document.getElementById("com-value");
    youValue.textContent = name;
    let value = math();
    comValue.textContent = value;
    let result = document.getElementById("result");
    if(youValue.textContent === "グー" ){
        if(comValue.textContent === "グー"){
            result.textContent = "愛子";
        }else if(comValue.textContent === "チョキ"){
            result.textContent = "勝ち";
        }else{
            result.textContent = "負け";
        }
    }else if(youValue.textContent ==="チョキ"){
        if(comValue.textContent === "グー"){
            result.textContent = "負け";
        }else if(comValue.textContent === "チョキ"){
            result.textContent = "愛子";
        }else{
            result.textContent = "勝ち";
        }
    }else{
        if(comValue.textContent === "グー"){
            result.textContent = "勝ち";
        }else if(comValue.textContent === "チョキ"){
            result.textContent = "負け";
        }else{
            result.textContent = "愛子";
        }
    }
}
function math(){
    let n = Math.floor(Math.random() * 3);
    let value
    if(n === 1){
        value = "グー";
    }else if(n === 2){
        value = "チョキ";
    }else{
        value = "パー"
    }
    return value
}