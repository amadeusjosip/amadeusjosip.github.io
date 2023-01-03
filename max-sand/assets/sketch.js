var canvas;
let GK = 0.999;
let GKw = 0.9999;
var tekst;
let tekstovi = [];
  
let font1;
 

function setup() {
    canvas = createCanvas(windowWidth*GKw, windowHeight*GK);
    canvas.position(0, 0);
    canvas.style("z-index", "-1"); 
    rectMode(CENTER);
  frameRate(60);

}

var pom = 18;
var m = 0;
var poc = -110;
var povecanje = 2; 
  function draw() {  
    m+=povecanje;
    resizeCanvas(windowWidth*GKw, windowHeight*GK);
    background("#d9d3c1"); 
    background("#111"); 
    noStroke();
    fill(0);

    for(var y = -poc; y < height+poc; y+=pom){
        for(var x = -poc; x < width+poc; x+=pom){
 
            var k = 0.8 + 0.5*sin(radians(m) + 10*noise(x*0.001, y*0.001));
            var sss = 51 + 35*sin(radians(m) + 10*noise(x*0.001, y*0.001));
            push();
            translate(x, y);
            rotate(radians(m)+3*noise(x*0.005, y*0.005));
            colorMode(HSB, 100);
            var dista = dist(x, y, mouseX, mouseY)/210;
            fill(sss, 90, 90, m/2);
            stroke(0,0,0, m/2); strokeWeight(1);
            var dista2 = dist(x, y, mouseX, mouseY)/440;
            rect(0, 0, pom*dista2*k, pom*dista2/3*k);
            pop();
 

        }
    }
 
 
  }
