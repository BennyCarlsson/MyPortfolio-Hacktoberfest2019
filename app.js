document.addEventListener("DOMContentLoaded", function(){

/* Console Easter Egg message*/ 
/* Credit derived from: https://thenewstack.io/tutorial-getting-creative-with-console-statements/ */

const style1 = [
'color: powderBlue',
'text-shadow: 2px 2px purple',
'background: plum',
'font-size: 3em',
'border: 1px solid purple',
'padding: 20px',
'font-family: fantasy'
].join(';');

console.log('%cHacktoberfest 2019! Hire Benny Carlsson Now!', style1);

/* End Console Easter Egg message*/

/*
  (┛ಠ_ಠ)┛彡┻━┻
  Merge hitchhikers guide and konami code easter eggs so they both work together.
*/
let keysPressed = [];
let degrees = 0;
let konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
document.addEventListener('keyup',logKeyPress);
function logKeyPress(e){
  (keysPressed.length >= 50) ? keysPressed = []: keysPressed.push(e.code);
  if(keysPressed.join(",").indexOf("Digit4,Digit2") > -1 || keysPressed.join(",").indexOf("Numpad4,Numpad2") > -1){
    hitchHikers();
  }
  if(keysPressed.join(",").indexOf(konamiCode.join(",")) > -1){
    flippingThing();
  }
}
function flippingThing(){
  degrees += 180;
  document.querySelector('body').style.transform = `rotate(${degrees}deg)`;
  keysPressed = [];
}
function hitchHikers(){
  let image = document.getElementById("dont-panic");
  document.getElementsByClassName("overlay")[0].style.animationPlayState = "running";
  image.style.display = "block";
  image.style.visibility = "visible";
  keysPressed = [];
}
/* end easter egg merge */


anime({
  targets: "article ul",
  translateY: -20,
  opacity: 1,
  delay: anime.stagger(80)
});
var firstTime = true;
var message = "Cool. You tried it!";
var later =
  "\n\nThis is the real easter egg.\n\nThe first message isn't a real easter egg because the Commit Message says what to do.\n\nThis one, however, is a message revealed only if the number '3' is hovered over more than once.\n\n";
function MouseoverMessageInAlertBox() {
  if (firstTime) {
    alert(message);
  } else {
    alert(later);
  }
  firstTime = false;
}
function imgClicked() {
  imgClicked.count += 1;
  if (imgClicked.count === 10) {
    var v = document.getElementById("profile_image");
    v.className += "spinner";
  }
  if (imgClicked.count === 11) {
    var v = document.getElementById("profile_image");
    v.classList.remove("spinner");
    imgClicked.count = 1;
  }
}
imgClicked.count = 0;


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '20') { //onCapslock
	
		alert('Well! well!! well!!! look who we have here')
    }
    if (e.keyCode == '70') { //F pressed
      alert('Respect paid');
      console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
      }

}
let string =
  "I'm an unemployed Software Developer soon starting to look for jobs in Gothenburg Sweden.";
let str = string.split("");
let phraseElement = document.querySelector(".phrase");
(function animate() {
  str.length > 0
    ? (phraseElement.innerHTML += str.shift())
    : clearTimeout(running);
  let running = setTimeout(animate, 90);
})();

function addPx(initial, amount) {
  return parseInt(initial.substring(0, initial.length - 1)) + amount + "px";
}

function onClickO(amount) {
  var img = document.getElementById("circle-profile-img");
  img.style["height"] = addPx(getComputedStyle(img)["height"], amount);
  img.style["max-width"] = addPx(getComputedStyle(img)["max-width"], amount);
  img.style["border-radius"] = addPx(
    getComputedStyle(img)["border-radius"],
    amount
  );
}

var options = {
  strings: [
    "I'm glad you visited...",
    "Welcome to my shitt",
    "Welcome to my creepy",
    "Welcome to my wonderful portfolio."
  ],
  typeSpeed: 40,
  backSpeed: 20,
  smartBackspace: true,
  backDelay: 300
};

var typed = new Typed("#typed", options);

const trololol = (function() {
  const honkify = (elementToHonkify = false) => {
    if (typeof window === "undefined") {
      console.warn("honkify only works in the browser.");
      console.warn("I mean... honk!");
      return;
    }

    //check if the user is on iOS Safari, if they are, we initiate the safari audio "hack"
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const webkit = !!ua.match(/WebKit/i);
    const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    const audio = new Audio(
      "https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3"
    );

    /**
     * if the platform is iOS Safari, we quickly play, pause, reset the audio object
     * this allows it to be playable the next time an user clicks a link
     */

    if (iOSSafari) {
      console.log("Honk! This is safari");
      document.body.addEventListener("touchstart", () => {
        audio.play();
        audio.pause();
        audio.currentTime = 0;
      });
    }

    const links = (elementToHonkify || document).querySelectorAll("a");

    const honk = event => {
      event.preventDefault();
      event.stopImmediatePropagation();

      audio.play();

      return false;
    };

    links.forEach(link => {
      link.addEventListener("click", honk);
    });

    const dehonk = () => {
      links.forEach(link => {
        link.removeEventListener("click", honk);
      });
    };

    return dehonk;
  };


  var typed = new Typed('#typed', options);

//  --------  discount easter egg
function close_discount_easter_egg() {
  document.getElementById("overlay").style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let buffer = [];
    let lastKeyTime = Date.now();
    let flag = true;

    document.addEventListener('keydown', event => {
        const charList = 'abcdefghijklmnopqrstuvwxyz ';
        const key = event.key.toLowerCase();

        // we are only interested in alphanumeric keys
        if (charList.indexOf(key) === -1) return;

        const currentTime = Date.now();

        if (currentTime - lastKeyTime > 1000) {
            buffer = [];
        }

        buffer.push(key);
        lastKeyTime = currentTime;

        if( buffer.join('') === 'easter egg' && flag) {
          document.getElementById("overlay").style.display = "block";
          flag = false;
        }

    });
});
// -------- /. discount easter egg



  const toggleBtn = document.querySelector("#leHonk");

  let func = false;

  toggleBtn.addEventListener("click", () => {
    if (!func) {
      func = honkify();

      toggleBtn.innerText = "No Honk";
    } else {
      func();
      func = false;
      toggleBtn.innerText = "Honk";
    }
  });
})();

// raining easter egg
function rainStart(x) {
  anime({
    targets: '#raining',
    translateY: [0, 800],
    delay: 400,
    direction: 'alternate',
    loop: true,
  });

  // x.style.fontSize = "64px";
  document.getElementById('raining').style.display = "block";
  document.getElementById('raining').style.zIndex = "9";
}

function rainStop(x) {
  // x.style.fontSize = "30px";
  document.getElementById('raining').style.display = "none";
}
});
