let r, g, b;
let hours, minutes, seconds, date;

document.getElementById('test').style.fontSize = "2em";
let testElement = document.querySelector('#test');
document.querySelector('.list-element').style.color = "blue";
let listElements = document.querySelectorAll('.list-element');
console.log(listElements);

function updateClock(){
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

setInterval(updateClock, 1000);

function changeListColor(){
    for(let i = 0; i < listElements.length; i++){
        changeColor();
        listElements[i].style.color = "rgb(" + r + "," + g + "," + b + ")";
    }
}

function changeColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    console.log(r, g, b);
    testElement.style.color = "rgb(" + r + "," + g + "," + b + ")";
}

testElement.addEventListener('click', changeColor);
testElement.addEventListener('mouseover', changeColor);
window.addEventListener('keypress', changeListColor);

setInterval(changeListColor, 2000);

function alertMessage(){
    window.alert('setTimeout läks tööle');
}

setTimeout(alertMessage, 3000);



