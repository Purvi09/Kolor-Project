
var colors = generateRandomColors(6);
function generateRandomColors(num) {
    var array = [];
    for (var i = 0; i < num; i++) {
        array.push(randomColor());

    }
    return array;

}
var display = document.querySelector(".display");
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

var circles = document.querySelectorAll(".Circle");
var dscore = document.querySelector("#Score");
var mscore = document.querySelector("#Scorem");
var dround = document.querySelector("#Round");
var dtime = document.querySelector("#timer");
var pickedColor = pickcolor();
let score = 0;
let round = 1;
let c = 10;

    display.style.backgroundColor = pickedColor;
    for (var j = 0; j < 6; j++) {
        circles[j].style.backgroundColor = colors[j];

        circles[j].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                // alert("Correct");
                score += 50;
                round++;
                dscore.textContent = score;
                dround.textContent = round;
                colors = generateRandomColors(6);
                pickedColor = pickcolor();
                display.style.backgroundColor = pickedColor;
                mscore.style.backgroundColor="green";
                for (var j = 0; j < 6; j++) {
                    circles[j].style.backgroundColor = colors[j];}
                    c=10;

            } else {
                score -= 10;
                dscore.textContent = score;
                round++;
                dround.textContent = round;
                colors = generateRandomColors(6);
                pickedColor = pickcolor();
                display.style.backgroundColor = pickedColor;
                mscore.style.backgroundColor="red";
                for (var j = 0; j < 6; j++) {
                    circles[j].style.backgroundColor = colors[j];}
                    c=10

            }
        })
    }
function pickcolor() {
    var random = Math.floor(Math.random() * 6);
    return colors[random];
}
function timer1(){
    c=c-1;
    if(c<=10){
        timer.textContent=c;
    }
    if(c<1){
        c=10;
        score -= 10;
        dscore.textContent = score;
        round++;
        dround.textContent = round;
        colors = generateRandomColors(6);
        pickedColor = pickcolor();
        display.style.backgroundColor = pickedColor;
        for (var j = 0; j < 6; j++) {
            circles[j].style.backgroundColor = colors[j];
        }
    }

}
    update=setInterval("timer1()",1000)


