var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy"){
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        })
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of the clicked square
            var clickedcolor = this.style.backgroundColor;
            //compare color to picked color
            if (pickedColor === clickedcolor) {
                message.textContent = "Correct!";
                changeColor(clickedcolor);
                h1.style.backgroundColor = clickedcolor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Wrong";
            }
        })
    }
}

resetButton.addEventListener("click", function(){
    reset();
})

function reset(){
    //generate new colors for the squares
    colors = generateRandomColors(numSquares);
    //pick a new color
    pickedColor = pickColor();
    //change color display to picked color
    colorDisplay.textContent = pickedColor;
    //change square colors
    for (var i = 0; i < squares.length; i++){
        if (colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }        
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";
    resetButton.textContent = "New Colors";
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