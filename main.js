let active = 0;
let season = document.getElementById("season").children;
let background = document.getElementById("background");
const backgroundList = ["url(./img/1.jpg)", "url(./img/2.jpg)", "url(./img/3.jpg)"]

function next() {
    active++;
    if(active >= season.length) {
        active = season.length
        //disable next button
    }
    season[active].className = "active";
    season[active-1].className = "hidden";
}

function prev() {
    active--;
    if(active <= 0) {
        active = 0;
    }
    season[active].className = "active";
    season[active+1].className = "hidden";
}

function backgroundSelector() {
    let i = Math.floor(Math.random() * backgroundList.length);
    console.log(i)
    background.style.backgroundImage = backgroundList[i]
}