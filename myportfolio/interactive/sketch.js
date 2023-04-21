var font;var font2;var font1;
function preload(){
  font = loadFont("../fontovi/font1.ttf"); 
  font1 = loadFont("../fontovi/fontB4.ttf");
  font2 = loadFont("../fontovi/font1.ttf");  

}

var canvas; var slider;
var gumb6;var input1;var input2;
var gumb5; var gumb4; var gumb3; var gumbS;
var velSlova = 120;

function setup() {
  noiseSeed(1129);
  canvas = createCanvas(650, 400); //dimenzije ekrana 
  canvas.position(windowWidth/2 - 325, windowHeight/2 - 200);
  textSize(230);   
  
  fill(255); 
  textAlign(CENTER, CENTER); 
   
  var prvi = 50;  
  
  gumb4 = createButton("TRAIL LENGTH"); 
  gumb4.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*0); 
  gumb4.mousePressed(stil4);  
  
  gumb5 = createButton("FONT"); 
  gumb5.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*1); 
  gumb5.mousePressed(stil5); 
  
  gumb6 = createButton("TEXT SIZE"); 
  gumb6.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*2);
  gumb6.mousePressed(stil6);


  
  var nameP3 = createP("Background: ");
  nameP3.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*3);
 slider = createSlider(0, 5, 1);
  slider.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*3.5); 
  slider.addClass("mojSlider");
    

  var nameP1 = createP("1st symbol: ");
  nameP1.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*4.2);
  input1 = createInput("");
  input1.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*4.7);
  input1.changed(updateText1); 

  
  var nameP2 = createP("2nd symbol: ");
  nameP2.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*5.5);
  input2 = createInput("");
  input2.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*6);
  input2.changed(updateText2);
  
  gumbS = createButton("SAVE as GIF"); 
  gumbS.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*7.1);
  gumbS.mousePressed(sejvaj);  
  gumbS.addClass("saveg");

  stroke(0);
  strokeWeight(6);
} 
var stanje5 = 1;
function stil5() {
if(stanje5%2==0){
  stroke(0);
  strokeWeight(6);
  font = font2;
  gumb5.removeClass("g2");
  gumb5.addClass("g1");
}

else{
  stroke(0);
  strokeWeight(2);  
  
  font = font1;
  gumb5.removeClass("g1");
  gumb5.addClass("g2");
}
  stanje5++;
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
  saveGif('Animacija.gif', velSlova, {delay: 0, units : 'frames'}); 
}

function skreen(){
  save("skrin" + ".jpg");
}

function screeny(){
  save("fotka" + ".jpg");
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
var edva = "?"; 
var ejedan = "!"; 

function updateText1(){
  edva = input1.value(); 
}
function updateText2(){
  ejedan = input2.value(); 
}

var brijeme = 1;
function brvr(){  
}

function draw() { 
  textFont(font);
  time = frameCount;
  colorMode(HSB, 100);
  var pozzadina = ((slider.value() - 0 ) / 5) * 100;
  background(0, 0, pozzadina);
   
  translate(70,4);
  vr+=brijeme;  

  
   
  
   okvir();   
  pmSlova();
  mvRazmak();
      
 for(var ij = 0; ij < brojnost; ij+=razmak){
   offs = ij*1.3;
  if((time+offs)%120 < 60)
      es = width*0.1 + width*0.75 * easing((time+offs)%120, 0, 60, 4);
    else
      es = width*0.85 - width*0.75 * easing((time+offs)%120, 60, 120, 4);
  
  var nojz1 = 50*noise(ij*0.01);
  var facy1 = sin(radians(vr)+nojz1);    

  var karotida = 0*cos(radians(vr) + 10*noise(ij*0.01));
  var karotide = 0*sin(radians(vr) + 10*noise(ij*0.01));

   textSize(222);
  if(dozvola>0)
  textSize(130+80*facy1);                                
   
  text(edva, es-55, height/4  - 35);
     
          var nojz2 = 50*noise(ij*0.01);
  var facy2 = sin(radians(vr+180)+nojz2);    
   textSize(222);
  if(dozvola>0)
  textSize(130+80*facy2);            
   
  text(ejedan, width*0.73-es+85, 3*height/4  -35);
     } 
 
 
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
