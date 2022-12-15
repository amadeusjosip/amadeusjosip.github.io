let paleta = ["#ceff5a", "#181818", "#fefefe", "#181818"];
const GLK = 1;
function windowResized() {
  resizeCanvas(500, 500);
}
let img;
let amg;
function preload() {
  img = loadImage('assets/p5js-color.png');
  amg = loadImage('assets/p5js-normal.png');
} 
var canvas; 
function setup() {
  canvas = createCanvas(500, 500); 
  canvas.position(windowWidth/2 - 250, windowHeight/2 - 220);
  pixelDensity(1);
  canvas.style("z-index", "-1"); 
  canvas.addClass("kanvas");
  colorMode(HSB, 100); 
}
var oblik = 0;
function mouseClicked(){
  oblik++;
}
var rub = 12;var pomak = 12; var m = 0;var xc = 0; var xs = 0; var mPomak = 4;
function draw() { 
  var misY = mouseY/40 + 0.5;
  m+=misY;
  background(0, 0, 5);
  rectMode(CENTER); 
  for(var y = rub; y <= height - rub; y = y + pomak){
    for(var x = rub; x <= width - rub; x = x + pomak){
      push();
      translate(x, y);
      noStroke(); 
      let c = img.get(x, y);  
      let d = amg.get(x, y);  
      var dubina = brightness(d) / 100 * 25;
      var radijus = brightness(c) / 100 * pomak * 0.9;
      var misX = dist(mouseX, 0, x, 0)/15;
       xc = (radijus)*cos(radians(m) + dubina/11);
       xs = (radijus)*sin(radians(m) + dubina/11);
       var boja = (dubina*2 + misX) % 100;
      fill(boja, 80, 80); 
      if(oblik%2==1){
        rotate(radians(m) + dubina/10);
        rect(xc, xs, radijus*2, 1);
      }
      else
      ellipse(xc, xs, radijus + 1, radijus + 1);
      pop();
    }
  }    
}
 





