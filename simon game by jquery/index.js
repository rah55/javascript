var possibleColor = ["red", "green", "yellow", "blue"];
var userClickPattern = [];
var computerGeneratedPattern = [];
var level = 0;
var started=false;

$(document).keypress(function(){
    if(!started){
        $("h1").text("level - " + level);
        nextSequence();
        started=true;
    }
});

$(".btn").click(function(){
var userPattern = this.id;
userClickPattern.push(userPattern);
makeSound(userPattern);
animate(userPattern);
checkAnswer(userClickPattern.length-1);


});

function nextSequence() {
    userClickPattern=[];
    level++;
    $("h1").text("level - " +level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomColor = possibleColor[randomNumber];
    computerGeneratedPattern.push(randomColor);
    makeSound(randomColor);
    animate(randomColor);
    checkAnswer(userClickPattern.length-1);

}

function checkAnswer(currentLevel){
    if(userClickPattern[currentLevel]===computerGeneratedPattern[currentLevel]){
        if(userClickPattern.length===computerGeneratedPattern.length){
            setTimeout(() => {
                nextSequence();
            }, 1000);
           
        }
    }else{
        $("body").addClass("gameover");
        $("h1").text("Wrong ,Please Retry By Press Any Key ")
        setTimeout(() => {
            $("body").removeClass("gameover");
        }, 1000);
        startOver();
    }
    
}
function startOver(){
    level=0;
    computerGeneratedPattern=[];
     started=false;

}

function animate(currentId) {
    var activeButton=$("#" + currentId)
    activeButton.click(function () {
        $("#" + currentId).addClass("press");
        setTimeout(() => {
            $("#"+ currentId).removeClass("press");
        }, 100);
    });
}

function makeSound(key) {
    

    switch (key) {
        case 'blue': var blue = new Audio("blue.mp3");
            blue.play();

            break;
        case 'red': var red = new Audio("red.mp3");
            red.play();

            break;

        case 'yellow': var yellow = new Audio("yellow.mp3");
            yellow.play();

            break;

        case 'green': var green = new Audio("green.mp3");
            green.play();

            break;


        default: console.log("wrong button selected")
            break;
    }
}