
let sections =document.querySelector('section');
let navLinks = document.querySelectorAll('header nav a') ;

window .onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sections.offsetTop-150;
        let height = sections.offsetHeight;
        let id =sections.getAttribute('id');

        if(top>= offset && top < offset + height ){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*= ' +  id +']').classList.add('active');
            });

        };
    });

    /* sticky navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

};
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200,
    });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .education-box, ,contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img,', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content,', { origin: 'right'});

var enterButton = document.getElementById('enterButton');
			var againButton = document.getElementById('againButton');
			var output = document.getElementById('outputText');
		
		
			var randomNumber = 22;
		
		
			function checkNumber(){
			  var input = document.getElementById('userInput').value;
			  if(input == randomNumber){
				output.innerHTML="You guessed right "+ ", "+ " it was "+ randomNumber;
				output.style.color="green";
			  }
			  else if(input>randomNumber && input<100){
				output.innerHTML="You guessed too high";
			  }
			  else if(input<randomNumber && input>1){
				output.innerHTML="You guessed too low";
			  }
			  else if(input<1){
				output.innerHTML="Higher, it has to be between 1 and 100";
			  }
			  else if(isNaN(input)){
				output.innerHTML="That's not a number!";
			  }
			  else{
				output.innerHTML="Lowe, it has to be between 1 and 100";
			  }}
// When the user clicks on div, open the popup
function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! Here is a quote for you today : “If you rush ahead, you will miss the important things.” ";
    }
    document.getElementById("demo").innerHTML = text;
  };
