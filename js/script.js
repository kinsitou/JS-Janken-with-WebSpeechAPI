//もろもろ定義
var pcHand = document.querySelector('#pc-hand');
var myHandNum;
var myHand = document.querySelector('#my-hand');
var judge;
var wins = 0;
var loses = 0;
var btn = document.querySelector('#btn');

//音声認識API
var speech = new webkitSpeechRecognition();

//日本語化
speech.lang = "ja";

//ボタンクリックで開始
btn.addEventListener('click', function() {
    speech.start();
});

//音声から自分の手を決定
speech.addEventListener('result', function(e) {
    console.log(e);
    var text = e.results[0][0].transcript;
    console.log(text)
    if(text == "Goo") {
        myHandNum = 0;
        myHand.src = "image/gu.jpg";
    }else if(text == "チョッキ" || text == "猪木") {
        myHandNum = 1;
        myHand.src = "image/cho.jpg";
    }else if (text == "パー") {
        myHandNum = 2;
        myHand.src = "image/par.jpg";
    }else {
        myHand.append("聞き取れません")
    }
    //pcの手の決定
    var pcHandNum = Math.floor(Math.random()*3);
    if(pcHandNum == 0) {
        pcHand.src = "image/gu.jpg";
    } else if(pcHandNum == 1) {
        pcHand.src = "image/cho.jpg";
    } else if(pcHandNum == 2) {
        pcHand.src = "image/par.jpg";
    }
    //勝敗判定
    if(myHandNum == 0 && pcHandNum == 1) {
        wins += 1;
        judge = "あなたの勝ち";
    } else if(myHandNum == 1 && pcHandNum == 2) {
        wins += 1;
        judge = "あなたの勝ち";
    } else if(myHandNum == 2 && pcHandNum == 0) {
        wins += 1;
        judge = "あなたの勝ち";
    } else if(myHandNum == pcHandNum) {
        judge = "ひきわけ";
    } else {
        loses += 1;
        judge = "あなたの負け";
    }
    document.querySelector(".wins").innerHTML = wins;
    document.querySelector(".loses").innerHTML = loses;
    document.querySelector("#judge").innerText = judge;
});