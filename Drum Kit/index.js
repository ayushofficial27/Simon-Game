
  for(var i=0 ; i< document.querySelectorAll(".drum").length ; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function(){
      var buttonPress=this.innerHTML;
      makeSound(buttonPress);
      animaT(buttonPress);
});
  }

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  animaT(event.key);
});


function makeSound(key){
  switch (key) {
    case "w":
    new Audio("sounds/crash.mp3").play();
      break;
      case "a":
          new Audio("sounds/kick-bass.mp3").play();
        break;
        case "s":
            new Audio("sounds/snare.mp3").play();
          break;
          case "d":
              new Audio("sounds/tom-1.mp3").play();
            break;
            case "j":
              new Audio("sounds/tom-2.mp3").play();
              break;
              case "k":
                new Audio("sounds/tom-3.mp3").play();
                break;
                case "l":
                  new Audio("sounds/tom-4.mp3").play();
                  break;
    default:
      alert("press another key");
  }

}
function animaT(key1){
  document.querySelector("."+key1).classList.add("pressed");
  setTimeout(function(){
      document.querySelector("."+key1).classList.remove("pressed")
  },100);
}
