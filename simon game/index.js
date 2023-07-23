var color = ["red", "green", "yellow", "blue"];
var userPattern = [];
var pcPattern = [];
var started=false;
var level = 0;



document.addEventListener("keydown", function () {
    if(!started){
        document.querySelector("h1").innerHTML = "level -" + level;
        nextSequence();
        started =true;
    }
    
   

})


for (var i = 0; i < document.querySelectorAll("button").length; i++)
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var userChoosenColor = this.id;
        userPattern.push(userChoosenColor);
        makeSound(userChoosenColor);
        animation(userChoosenColor);
        checkAnswer(userPattern.length-1);
        


    });
   
 function checkAnswer(currentLevel){
        if(userPattern[currentLevel] === pcPattern[currentLevel]){
            if(userPattern.length === pcPattern.length){
                setTimeout(function(){
                    nextSequence();
                },1000);
            }
        }
        else{
            document.querySelector("body").classList.add("gameover");
            document.querySelector("h1").innerHTML="Game over, Press Any Key To Start The Game";
            setTimeout(() => {
                document.querySelector("body").classList.remove("gameover");
                
            }, 1000);
            startOver();

        }

    }
        

function nextSequence() {
    userPattern=[];
    level++;
    document.querySelector("h1").innerHTML = "level -" + level;
    var randomColorNumber = Math.floor(Math.random() * 4);
    var randomChooseColor = color[randomColorNumber];
    pcPattern.push(randomChooseColor);
    makeSound(randomChooseColor);
    animation(randomChooseColor);
}



function startOver(){
    level=0;
    pcPattern=[];
    started=false;
}





function makeSound(currentId) {
    switch (currentId) {
        case "red":
            var red = new Audio("red.mp3");
            red.play();
            break;

        case "blue": var blue = new Audio("blue.mp3");
            blue.play();
            break;

        case "yellow": var yellow = new Audio("yellow.mp3");
            yellow.play();
            break;

        case "green": var green = new Audio("green.mp3");
            green.play();
            break;

        default: console.log("wrong button pressed")
    }
}
function animation(currentKey) {
    var activeButton = document.querySelector("#" + currentKey);
    activeButton.classList.add("press")
    setTimeout(function () {
        activeButton.classList.remove("press")
    }, 100);
}




