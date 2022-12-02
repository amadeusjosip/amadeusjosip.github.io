let paleta = ["#ceff5a", "#181818", "#fefefe", "#181818"];
const GLK = 1;
function windowResized() {
  resizeCanvas(windowWidth*GLK, windowHeight*GLK);
}
var blurShader;
var canvas;
var pg;
var pg2;
var font;
function preload(){
  font = loadFont("fontovi/Aeonik-Medium.ttf");
   blurShader = loadShader('assets/blur.vert', 'assets/blur.frag');
}

let a1, a2, a3, a4, a5, a6, a7, a8, a9;
let ra2;
function setup() {
  canvas = createCanvas(windowWidth*GLK, windowHeight*GLK, WEBGL);
  pg = createGraphics(windowWidth*GLK*2, windowHeight*GLK*2);
  pg2 = createGraphics(windowWidth*GLK*2, windowHeight*GLK*2);
  canvas.position(0, 0);
  pixelDensity(1);
  canvas.style("z-index", "-1");  
 
  pg.textFont(font);
  pg.noStroke();
  pg.rectMode(CENTER); 
  pg.textAlign(CENTER);

  
  a1 = random(1.6);
  a2 = random(0.3, 0.6)*5;
  a3 = random(0.003, 0.008);
  a4 = random(0, 1);
  a5 = random(0, 1);
  a6 = random(0, 1);
  a7 = random(0, 1);
  a8 = random(0, 1); 

  ra2 = random(100);
  

}

var vr=0;
var to = 80;
var tekst = "NEKI RANDOM TEKST";
var time = 0;
function draw(){ 
  pg.background("#111"); 
  time+=2;
  var dista = dist(mouseX, mouseY, windowWidth/2, windowHeight/2)/1;
  var fila = map(dista, 0, 1000, 120, 20);
  pg.fill(fila, 212);
  
  pg.rect(windowWidth/1, windowHeight/1, windowWidth*2, windowHeight*2);
  var pomak = map(dista, 0, 1000, 40, 150);
  ra2 = map(dista, 0, 1000, 0, 50);
  var ra3 = map(dista, 0, 1000, 5, 40);

  var ra = 30;
  for(var x = windowWidth/2; x < windowWidth*1.5; x+=pomak){
    for(var y = windowHeight/2; y < windowHeight*1.5; y+=pomak){
      var bb = ra+ra*sin(radians(time)+ra3*noise(x*0.001, y*0.001));
      pg.colorMode(HSB, 100);
      pg.fill((bb+ra2)%100, 80, 80);
      pg.rect(x, y, pomak, pomak);
    }
  }
pg.colorMode(RGB, 255);



 
  pg.push();
  pg.translate(windowWidth/1 - (to*tekst.length), windowHeight/1);
  for(var l = 0; l < tekst.length; l++){
    var veve = map(dista, 0, 1000, 10, 130);
    var veve2 = map(dista, 0, 1000, 11, 1);
    var v = veve*sin(radians(vr)-l/1); 
    var v2 = 145+50*sin(radians(vr)+l/5); 
    pg.textSize(v2);
    pg.fill(255,255); 
    pg.text(tekst[l], l*to*2 + 1 + 80, v);
  } 
  pg.pop();

   
  a1 = random(13.6);
  a2 = map(dista, 0, 1000, 0.3, random(0.8, 0.99));
  a3 = map(dista, 0, 1000, 0.003, random(100,125));
  a4 = map(dista, 0, 1000, 0, random(110,115));
  a5 = map(dista, 0, 1000, 0, random(20,25));
  a6 = map(dista, 0, 1000, 0, random(2.5, 3.1)*12);
  a7 = map(dista, 0, 1000, 0, 0.1);
  a8 = map(dista, 0, 1000, 0, random(4.5,5.1));
  var vrijeme = map(dista, 0, 1000, 2, 6);
  vr+=vrijeme;


  

  pg.fill(255,0,0);
  pg.rect(windowWidth/1, windowHeight/1, 12, 65);
  pg.rect(windowWidth/1, windowHeight/1, 65, 12);


   
  blurShader.setUniform('tex0', pg);
  blurShader.setUniform('texelSize', [1 / windowWidth, 1 / windowHeight]);
  blurShader.setUniform('grunge', a1);
  blurShader.setUniform('grunge2', a2);
  blurShader.setUniform('frq1', a3);
  blurShader.setUniform('frq2', a4);
  blurShader.setUniform('frq3', a5);
  blurShader.setUniform('frq4', a6);
  blurShader.setUniform('frq5', a7);
  blurShader.setUniform('frq6', a8);
   
   shader(blurShader);
   rect(-width/2, -height/2, width, height);
  
}

 
