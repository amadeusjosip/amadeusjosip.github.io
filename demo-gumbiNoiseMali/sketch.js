var font;
function preload(){
  font = loadFont("Mabry-Pro-Medium.ttf");   
}

function windowResized(){
  canvas = createCanvas(windowWidth*0.1*2.67, windowWidth*0.1*3.76); //dimenzije ekrana 
  canvas.position(windowWidth*0.1, windowHeight*0.1 - 25);
}

var canvas; var slider1; var slider2; var slider3; var slider4;
var gumb6;var input1;var input2;
var gumb5; var gumb4; var gumb3; var gumbS;
var velSlova = 120;
var gumbA;
var prvi;
var nameP1; var nameP2; var nameP3; var nameP4; var nameP5; var nameP0; var input0;
var ovajSeed;
function setup() {  
  noiseSeed(100); 
  canvas = createCanvas(300, 300); //dimenzije ekrana 
  canvas.position(windowWidth*0.1, windowHeight*0.1 - 25);
  textSize(230);   
  
  fill(255); 
  textAlign(CENTER, CENTER); 
   
   prvi = 50;  
   
   var xPomak = 20;
   var yPomak = -40;

   nameP0 = createP("Prvi znak: ");
   nameP0.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*9 + yPomak);
   input0 = createInput("%");
   input0.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*8.6 + yPomak);
   input0.changed(updateText0);   

   nameP1 = createP("Drugi znak: ");
   nameP1.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*8 + yPomak);
   input1 = createInput("+");
   input1.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*7.6 + yPomak);
   input1.changed(updateText1); 
 
   
    nameP2 = createP("Treći znak: ");
   nameP2.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*7 + yPomak);
   input2 = createInput("*");
   input2.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*6.6 + yPomak);
   input2.changed(updateText2);
   
   nameP3 = createP("Veličina: ");
   nameP3.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*5.8 + yPomak);
  slider1 = createSlider(10, 50, 25);
  slider1.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*5.4 + yPomak);
  slider1.addClass("mojSlider");
 
    nameP4 = createP("Razina noisea: ");
   nameP4.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*4.8 + yPomak);
  slider2 = createSlider(1, 12, 9);
   slider2.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*4.4 + yPomak);
   slider2.addClass("mojSlider");
 
   
    nameP5 = createP("Okvir: ");
   nameP5.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*3.8 + yPomak);
  slider3 = createSlider(100, 200, 110);
  slider3.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*3.4 + yPomak);
  slider3.addClass("mojSlider");
     
  
  
  var gumbN = createButton("Novi noise seed"); 
  gumbN.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*1.5 + yPomak);
  gumbN.addClass("saveg");
  gumbN.mousePressed(stilN); 
 
  
  gumbS = createButton("Animiraj"); 
  gumbS.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*2.5 + yPomak);
  gumbS.addClass("g2");
  gumbS.mousePressed(stil5);   
  
  gumbA = createButton("SAVE as GIF"); 
  gumbA.position(windowWidth*0.1 + windowWidth*0.1*2.67 + xPomak, windowHeight*0.1 + windowWidth*0.1*3.76 - 25 - 30 - prvi*0.5 + yPomak);
  gumbA.mousePressed(sejvaj);  
  gumbA.addClass("saveg");
 
 
  rectMode(CENTER);

  stroke(0);
  strokeWeight(6);
} 
//////////////////////////////////////////////////////
var ailis = 0;
var stanje5 = 1;
function stil5() {
  if(stanje5%2!=0){ 
    gumbS.removeClass("g2");
    gumbS.addClass("g1");
  }
  
  else{ 
    gumbS.removeClass("g1");
    gumbS.addClass("g2");
  }
    stanje5++;
    ailis++;
  }
////////////////////////////////////////////////////7777
var trenutniSeed = 100;
  function stilN() { 
    
  ovajSeed = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118];
  ovajSeed = shuffle(ovajSeed);

  while(trenutniSeed == ovajSeed[0]){
  ovajSeed = shuffle(ovajSeed);
  }
  
  noiseSeed(ovajSeed[0]); 

  trenutniSeed = ovajSeed[0];

    }
 
  
  

 
var stanje4 = 1;
var moze5 = 4;
function stil4() {
  
  moze5*=(-1);
if(stanje4%2==0){
  gumb4.removeClass("g2");
  gumb4.addClass("g1");
}

else{
  gumb4.removeClass("g1");
  gumb4.addClass("g2");
}
  stanje4++;
}


 
var stanje6 = 1;
function stil6() {
  dozvola*=(-1);
if(stanje6%2==0){
  gumb6.removeClass("g2");
  gumb6.addClass("g1");
}

else{
  gumb6.removeClass("g1");
  gumb6.addClass("g2");
}
  stanje6++;

  if(dozvola<0) velSlova = 120;
  else velSlova = 360;
}

 


function sejvaj(){ 
  saveGif('theGIF.gif', 180, {delay: 0, units : 'frames'}); 
}
 var es;
let dozvola = -4;
var brojnost = 5;
var razmak = 1;
let pomT = 80;  
let pomP = 44;  
var time = 0;
var vr=0; var faktor1; var faktor2;
  var offs = 10;
var rand = 1;
var enula = "%"; 
var edva = "+"; 
var ejedan = "*"; 

function updateText0(){
  enula = input0.value(); 
}
function updateText1(){
  edva = input1.value(); 
}
function updateText2(){
  ejedan = input2.value(); 
}
 
function brvr(){  
}

function draw() {  
  windowResized();
  textFont(font);
  time = frameCount; 
  
  background("#fff");
  clear();
  fill("#000");
  strokeWeight(1);
  stroke(0);  
  rect(width/2 + 8, height/2 + 8, width - 50, height - 50, 5);

  
  fill("#f4f4f0");
  strokeWeight(1);
  stroke(0);
  rect(width/2, height/2, width - 50, height - 50, 5);

  //boja znakova
  fill("#000"); 
  noStroke();
    
  vr+=4;  
  var rub = slider3.value();
  var pomak = slider1.value();

  var generalniPomak = 10;
  if(slider1.value() > 18) generalniPomak = 15;

  for(var y = rub; y < height - rub; y+=pomak){
    for(var x = rub + generalniPomak; x < width - rub; x+=pomak){
      push();
      translate(x, y);
 

      var nojozMali = 40*noise(x*0.0001*slider2.value(), y*0.0001*slider2.value());
      var nojoz = 30 + 20*sin(radians(vr) + nojozMali);
      var xc = 40*cos(radians(vr) + nojozMali);
      var xs = 10*sin(radians(vr) + nojozMali);
      if(ailis%2==0){xc = 0; xs = 0;}
      textSize(pomak); 
      if(nojoz < 25)
      text(enula, xc, xs);
      else if(nojoz > 35)
      text(ejedan, xc, xs);
      else
      text(edva, xc, xs);
      pop();
    }
  }
  
   
  
   okvir();   
  pmSlova();
  mvRazmak();
      
  /*
 for(var ij = 0; ij < brojnost; ij+=razmak){
   offs = ij*1.3;
  if((time+offs)%120 < 60)
      es = width*0.1 + width*0.75 * easing((time+offs)%120, 0, 60, 4);
    else
      es = width*0.85 - width*0.75 * easing((time+offs)%120, 60, 120, 4);
  */                                
    
      
 
 
}
var moze = 4;
function obrubSlovaY(){
  moze *= 1;
}
function obrubSlova(){  
  if(moze>0){ 
  stroke(0);
  } 
}
var moze2 = -4;
function okvirY(){  moze2 = -4;
}
function okvir(){ 
  if(moze2>0){
    
 
  }
}
var moze3 = 4;
function invertBojeY(){
  moze3*=(-1);
}
function invertBoje(){
  if(moze3>0) filter(INVERT);
}

var moze4 = 4;
function mvRazmakY(){
  moze4*=(-1);
}
function mvRazmak(){ razmak = 4;
  if(moze4>0) razmak = 1;
}
 
function pmSlova(){ 
  if(moze5>0) brojnost = 30;
  else brojnost = 5;
} 


function easing(f, f1, f2, exp){
  if(f < f1)
    return 0;
  if(f > f2)
    return 1;
  
  var numframes = f2 - f1;
  
  var p = map(f-f1, 0, numframes-1, 0, 1);
  p = power(p, exp);
  
  return p;
}

function power(p, g) {
    if (p < 0.5)
        return 0.5 * pow(2*p, g);
    else
        return 1 - 0.5 * pow(2*(1 - p), g);
}

