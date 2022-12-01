var font;
function preload(){
  font = loadFont("fontovi/Aeonik-Medium.ttf");   
}

function windowResized(){
  canvas = createCanvas(windowWidth - 400, windowHeight); //dimenzije ekrana 
}

var canvas; var slider1; var slider2; var slider3; var slider4;
var gumb6;var input1;var input2;
var gumb5; var gumb4; var gumb3; var gumbS;
var velSlova = 120;
var gumbA;
function setup() { 
  var ovajSeed = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118];
  ovajSeed = shuffle(ovajSeed);
  noiseSeed(ovajSeed[0]); 
  canvas = createCanvas(windowWidth - 400, windowHeight); //dimenzije ekrana 
  canvas.position(0, 0);
  textSize(230);   
  
  fill(255); 
  textAlign(CENTER, CENTER); 
   
  var prvi = 50;  
   

  var nameP1 = createP("Prvi znak: ");
  nameP1.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*.25);
  input1 = createInput("");
  input1.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*.7);
  input1.changed(updateText1); 

  
  var nameP2 = createP("Drugi znak: ");
  nameP2.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*1.55);
  input2 = createInput("");
  input2.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*2);
  input2.changed(updateText2);
  
  var nameP3 = createP("Veličina: ");
  nameP3.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*3);
 slider1 = createSlider(15, 50, 20);
 slider1.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*3.45); 
 slider1.addClass("mojSlider");

  var nameP3 = createP("Noise: ");
  nameP3.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*4);
 slider2 = createSlider(1, 12, 9);
  slider2.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*4.45); 
  slider2.addClass("mojSlider");

  
  var nameP3 = createP("Rub: ");
  nameP3.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*5);
 slider3 = createSlider(50, 200, 80);
 slider3.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*5.45); 
 slider3.addClass("mojSlider");
    

 
 gumbS = createButton("ANIMACIJA ili STATIČNO"); 
 gumbS.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*6.5);
 gumbS.addClass("g2");
 gumbS.mousePressed(stil5);   
 
 gumbA = createButton("SPREMI GIF"); 
 gumbA.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*7.5);
 gumbA.mousePressed(sejvaj);  
 gumbA.addClass("saveg");

 
  

  stroke(0);
  strokeWeight(6);
} 
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
 
let dozvola = -4;
var brojnost = 5;
var razmak = 1;
let pomT = 80;  
let pomP = 44;  
var time = 0;
var vr=0; var faktor1; var faktor2;
  var offs = 10;
var rand = 1;
var edva = "#"; 
var ejedan = ","; 

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
  
  background("#faff00");
  fill("#000300"); 
  noStroke();
    
  vr+=4;  
  var rub = slider3.value();
  var pomak = slider1.value();

  for(var y = rub; y < height - rub; y+=pomak){
    for(var x = rub; x < width - rub; x+=pomak){
      push();
      translate(x, y);
      var nojozMali = 40*noise(x*0.0001*slider2.value(), y*0.0001*slider2.value());
      var nojoz = 30 + 20*sin(radians(vr) + nojozMali);
      var xc = 40*cos(radians(vr) + nojozMali);
      var xs = 10*sin(radians(vr) + nojozMali);
      if(ailis%2==0){xc = 0; xs = 0;}
      textSize(pomak); 
      if(nojoz < 30)
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

