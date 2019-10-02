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

let string = "I'm an unemployed Software Developer soon starting to look for jobs in Gothenburg Sweden.";
let str = string.split("");
let phraseElement = document.querySelector('.phrase');
(function animate() {
str.length > 0 ? phraseElement.innerHTML += str.shift() : clearTimeout(running); 
let running = setTimeout(animate, 90);
})();

function addPx(initial, amount) {
	return parseInt(initial.substring(0, initial.length - 1)) + amount + "px";
}

function onClickO(amount) {
	var img = document.getElementById('circle-profile-img');
	img.style['height'] = addPx(getComputedStyle(img)['height'], amount);
	img.style['max-width'] = addPx(getComputedStyle(img)['max-width'], amount);
	img.style['border-radius'] = addPx(getComputedStyle(img)['border-radius'], amount);	
}


var options = {
	strings: ['I\'m glad you visited...' , 'Welcome to my shitt', 'Welcome to my creepy', 'Welcome to my wonderful portfolio.'],
	typeSpeed: 40,
	backSpeed: 20,
	smartBackspace: true,
	backDelay: 300,
};
  
var typed = new Typed('#typed', options);

