anime({
  targets: 'article ul',
  translateY: -20,
  opacity: 1,
  delay: anime.stagger(80)
});

function imgClicked(){
	imgClicked.count += 1;
	if(imgClicked.count===10){
		var v = document.getElementById("profile_image");
		v.className += "spinner";
		imgClicked.count = 0;
	}
}

imgClicked.count = 0;
