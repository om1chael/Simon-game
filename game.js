

buttonColours = ["red", "blue", "green", "yellow"];
gamePattern=[]
userClickedPattern=[]
level=0;
started = false;
check_val=0;


function nextSequence(){

  userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);


  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}


function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}



$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  // Inputs the array length starting from 0 ;
  //
  checkAnswer(userClickedPattern.length-1);

});




function animatePress(currentColour){
$("."+currentColour).addClass("pressed");
setTimeout(function() {
  $("."+currentColour).removeClass("pressed");
}, 100);
}


$(document).keypress(function(){
  if(started == false){
     $("#level-title").text("Level " + level);
       nextSequence();
       started= true;

  }});

function checkAnswer(currentLevel){

if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
  console.log("sucess ");
  if((userClickedPattern.length)===gamePattern.length){
setTimeout(() => {   nextSequence();

}, 1000);
  }

}else {
  console.log("loss");
  $("body").addClass("game-over")

  playSound("wrong");

  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
  $("#level-title").text("Game Over, Press Any Key to Restart");
  startOver();
}
}

function startOver(){
level=0
gamePattern =[]
started =false;
}




//
//     if(currentLevel==gamePattern.length){
// console.log(currentLevel);
//     setTimeout(() => {  nextSequence(); }, 1000);
// }
//   }
