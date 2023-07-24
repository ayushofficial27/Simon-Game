var buttonInput=["blue","green","red","yellow"];
var gamepattern=[];
var userinput=[];

var start=false;
var level=0;

$(document).keypress(function(){
  if(!start){
    $("h1").text("Level "+level);
    nextsequence();
    start=true;
  }
});
$(".btn").click(function(){
  var userclick=$(this).attr("id");
  userinput.push(userclick);
  playSound(userclick);
  animation(userclick);
  check(userinput.length-1);
});
function playSound(color){
  new Audio("sounds/"+color+".mp3").play();
}
function animation(color){
  $("#"+color).addClass("pressed");
  setTimeout(function(){
      $("#"+color).removeClass("pressed");
  },100);
}
function gameOver(){
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },1000);
    $("h1").text("Game-over,press any key");
    level=0;
    start=false;
    gamepattern=[];
}
function nextsequence(){
  userinput=[];
  level++;
  $("#level-title").text("Level " + level);
  var randomnum=Math.floor(Math.random()*4);
  var color=buttonInput[randomnum];
  gamepattern.push(color);
  $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(color);

}
function check(len){
  if(gamepattern[len]===userinput[len]){
    if(gamepattern.length===userinput.length){
      setTimeout(function () {
        nextsequence();
      }, 1000);
    }
  }
  else{
    gameOver();
  }
}
