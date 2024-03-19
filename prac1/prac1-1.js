"use strict";
let answer;
do{
    answer =  window.prompt("ユーザーが身長を入力するダイアログ");
    if(answer === null){
        break;
    }
    if(answer !== ""){
       if (answer.match(/[^0-9]+/)) {
            //半角英数字以外
            window.alert("半角数字で入力してください。")
            continue;
        } else {
            //半角英数字
            break;
        }
    }
    window.alert("入力がないと判定できません")
}while(true);
if(answer !== null){

    let flg = window.confirm("プレミアムチケットを持っているかどうか？");

    if(answer >= 100){
        if(flg){
            window.alert("プレミアムシートに乗車可能です。");
        }else{
            window.alert("通常のシートに乗車可能です。");
        }
    }else if(answer >= 90){
        window.alert("付き添うありで乗車可能です。");
    }else{
        window.alert("乗車できません。");
    }
}



