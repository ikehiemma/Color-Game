var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");

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
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again!";
        }
    })
};

function changeColor(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}