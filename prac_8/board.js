"strict";
function ClickBtn(){
    let name = document.querySelector("#name-box");
    let comment = document.querySelector(".text-comment");
    if(name.value !=="" && comment.value !== ""){

    let nithan = document.querySelector(".nithan");
    let createElement_li = document.createElement("li");
    nithan.prepend(createElement_li);
    let createElement_p = document.createElement("p");
    createElement_p.textContent =`${name.value}さんの投稿`  ;
    createElement_p.setAttribute("class","p-font");
    name.value = "";
    createElement_li.prepend(createElement_p);
    createElement_p = document.createElement("p");
   
    createElement_p.textContent = comment.value;
    comment.value = "";
    createElement_li.append(createElement_p);
    let today = document.createElement("p");
    today.textContent = date();
    createElement_li.append(today);

    }
} 

function date(){
    let today = new Date();
    return today.toLocaleString();
}

