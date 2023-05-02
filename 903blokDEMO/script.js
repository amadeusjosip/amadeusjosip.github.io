const navLinks = document.querySelectorAll('nav a');
const nav = document.querySelector('nav');

 	
 

const navbar = document.querySelector('#navbar');
const thisSection = document.querySelector('#marko');
const thatSection = document.querySelector('#petra');
var kost = 20;




window.addEventListener('scroll', function() {
    if (window.scrollY >= thisSection.offsetTop - navbar.offsetHeight - kost) {
      navbar.classList.add('scrolledIN');
	  for(var i = 0; i < navLinks.length; i++){
	  navLinks[i].classList.add("color2");
		}	
    } else {
      navbar.classList.remove('scrolledIN'); 
	  for(var i = 0; i < navLinks.length; i++){
	  navLinks[i].classList.remove("color2");
		}	
    }
  });

  window.addEventListener('scroll', function() {
    if (window.scrollY >= thatSection.offsetTop - navbar.offsetHeight - kost) {
      navbar.classList.add('scrolledOUT'); 
	  for(var i = 0; i < navLinks.length; i++){
	  navLinks[i].classList.add("color1");
		}	
    } else {
      navbar.classList.remove('scrolledOUT'); 
	  for(var i = 0; i < navLinks.length; i++){
	  navLinks[i].classList.remove("color1");
		}	
    }
  });
    

  
navLinks.forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();
		const href = link.getAttribute('href');
		const offsetTop = document.querySelector(href).offsetTop;
        const x4 = -40;
        const y4 = x4 + offsetTop;

		scroll({
			top: y4,
			behavior: 'smooth'
		});

        
		if (href === '#petra') {
			nav.classList.add('scrolledOUT'); 
			for(var i = 0; i < navLinks.length; i++){
			navLinks[i].classList.add("color2");
			  }	
		} else {
			nav.classList.remove('scrolledOUT'); 
			for(var i = 0; i < navLinks.length; i++){
			navLinks[i].classList.add("color1");
			  }	
		}

		if (href === '#marko') {
			nav.classList.add('scrolledIN');
			for(var i = 0; i < navLinks.length; i++){
			navLinks[i].classList.remove("color2");
			  }	
		} else {
			nav.classList.remove('scrolledIN');
			for(var i = 0; i < navLinks.length; i++){
			navLinks[i].classList.remove("color1");
			  }	
		}
	});
});



 
window.addEventListener('scroll', () => {
	const scrollPosition = window.scrollY;
	const sections = document.querySelectorAll('section');
	const positions = [];
	let currentIndex = 0;
  
	sections.forEach((section) => {
	  positions.push(section.offsetTop);
	});
  
	for (let i = 0; i < positions.length; i++) {
	  if (scrollPosition >= positions[i]) {
		currentIndex = i;
	  } else {
		break;
	  }
	}
  
	const links = document.querySelectorAll('.navbar a');
  
	links.forEach((link, index) => {
	  if (index === currentIndex) {
		link.style.fontWeight = 'bold';
	  } else {
		link.style.fontWeight = 'normal';
	  }
	});
  });
  