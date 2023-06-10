var body = document.body; //variable to store the body elemtn of the page
var button = document.createElement('button');

button.innerText = 'Start'; //Sets the inner text of the button to Start

var startIsClicked = false;

button.addEventListener("click", isClicked);

function isClicked (){
    startIsClicked = true;
    console.log ("clicked");
    var buttonStatus = true;

    return buttonStatus;
}


body.append(button); //adds button to body

//isClicked(startIsClicked);
console.log (startIsClicked);





