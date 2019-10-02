anime({
  targets: 'article ul',
  translateY: -20,
  opacity: 1,
  delay: anime.stagger(80)
});
var firstTime = true;
var message = "Cool. You tried it!";
var later = "\n\nThis is the real easter egg.\n\nThe first message isn't a real easter egg because the Commit Message says what to do.\n\nThis one, however, is a message revealed only if the number '3' is hovered over more than once.\n\n"
function MouseoverMessageInAlertBox()
{
   if(firstTime) { alert(message); }
   else { alert(later); }
   firstTime = false;
}
function imgClicked(){
	imgClicked.count += 1;
	if(imgClicked.count===10){
		var v = document.getElementById("profile_image");
		v.className += "spinner";
	}
	if(imgClicked.count===11){
		var v = document.getElementById("profile_image");
		v.classList.remove("spinner");
		imgClicked.count=1;
	}
}
imgClicked.count = 0;

var options = {
	strings: ['I\'m glad you visited...' , 'Welcome to my shitt', 'Welcome to my creepy', 'Welcome to my wonderful portfolio.'],
	typeSpeed: 40,
	backSpeed: 20,
	smartBackspace: true,
	backDelay: 300,
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
