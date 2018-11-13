var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

easyButton.addEventListener("click", function(){
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
})

hardButton.addEventListener("click", function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
})

resetButton.addEventListener("click", function(){
    //generate new colors for the squares
    colors = generateRandomColors(6);
    //pick a new color
    pickedColor = pickColor();
    //change color display to picked color
    colorDisplay.textContent = pickedColor;
    //change square colors
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of the clicked square
        var clickedcolor = this.style.backgroundColor;
        //compare color to picked color
        if (pickedColor === clickedcolor) {
            message.textContent = "Correct!";
            changeColor(clickedcolor);
            h1.style.backgroundColor = clickedcolor;
            resetButton.textContent = "Try Again?"
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!";
        }
    })
}

function changeColor(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var randomNumber = Math.floor(Math.random()*colors.length);
    return colors[randomNumber];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for (var i = 0; i < num; i++){
        //get random colors
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //get a 'red' from 0 to 255
    var r = Math.floor(Math.random()*256);
    //get a 'green' from 0 to 255
    var g = Math.floor(Math.random()*256);
    //get a 'blue' from 0 to 255
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r +", " + g + ", " + b + ")";
}