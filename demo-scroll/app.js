const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 59;

const currentFrame = (index) => `./slike/${(index + 1).toString()}.jpg`;

const images = [];
let tekst = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

gsap.to(tekst, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "500%",
  },
  onUpdate: render,
});

gsap.fromTo(
  ".opis",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    scrollTrigger: {
      scrub: 1,

      start: "50%",
      end: "60%",
    },
    onComplete: () => {
      gsap.to(".opis", { opacity: 0 });
    },
  }
);

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[tekst.frame], 0, 0);
}




const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('efektpe');
        }
        else{
            entry.target.classList.remove('efektpe');
        }
 
    });
}); 

const hiddenElements1 = document.querySelectorAll('.pe');
hiddenElements1.forEach((el) => observer1.observe(el));


const observer1a = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('efektoou');
        }
        else{
            entry.target.classList.remove('efektoou');
        }
 
    });
}); 

const hiddenElements1a = document.querySelectorAll('.oou');
hiddenElements1a.forEach((el) => observer1a.observe(el));

 
document.getElementById("extraGumb").addEventListener("click", eprikazi);  

const x = document.getElementById("extraSlika");
var y = 0;
function eprikazi(){
  if(y % 2 == 0){
    x.style.opacity = "1";
    x.style.transition = "0.4s";
    }
    else{
      x.style.opacity = "0";
      x.style.transition = "0.2s";
      }
      y++;
}
 
