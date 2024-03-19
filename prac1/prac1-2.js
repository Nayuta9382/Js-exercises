"use strict"
do{
    let station = window.prompt("目的の駅を入力してください。\n1：A駅\n2：B駅\n3：C駅");
    if(station === "1"){
        window.alert("快速電車が止まります。");
        break;
    }else if(station === "2"){
        window.alert("快速電車と急行電車が止まります。");
        break;
    }else if(station === "3"){
        window.alert("特急電車が止まります。");
        break;
    }else{
        window.alert("1又は2又は3で入力してください。")
    }
}while(true);
