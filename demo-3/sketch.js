var font;var font2;
function preload(){
  font = loadFont("fontovi/Aeonik-Medium.ttf");
  font2 = loadFont("fontovi/Aeonik-Medium.ttf");

}

var canvas; var slider;
var gumb6;var input1;var input2;
var gumb5; var gumb4; var gumb3; 
function setup() {
  noiseSeed(1129);
  canvas = createCanvas(650, 400); //dimenzije ekrana 
  textFont(font);
  textSize(230);   
  
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER); 
   
  var prvi = 50;
  gumb3 = createButton("INVERTAJ BOJE"); 
  gumb3.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*0);
  gumb3.mousePressed(invertBojeY);  
  
  gumb4 = createButton("TRAG SLOVA"); 
  gumb4.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*1);
  gumb4.mousePressed(pmSlovaY);  
  
  gumb5 = createButton("GUSTOĆA SLOVA"); 
  gumb5.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*2);
  gumb5.mousePressed(mvRazmakY);  
  
  gumb6 = createButton("PROMJENA VELIČINE SLOVA"); 
  gumb6.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*3);
  gumb6.mousePressed(tekst);  

  
  var nameP3 = createP("Mijenjaj pozadinu: ");
  nameP3.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*4);
 slider = createSlider(0, 100, 30);
  slider.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*4.5); 
  slider.addClass("mojSlider");
    

  var nameP1 = createP("Upiši prvi znak: ");
  nameP1.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*5.5);
  input1 = createInput("");
  input1.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*6);
  input1.changed(updateText1); 

  
  var nameP2 = createP("Upiši drugi znak: ");
  nameP2.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*7);
  input2 = createInput("");
  input2.position(windowWidth/2 + 420, windowHeight/2 - 200 + prvi*7.5);
  input2.changed(updateText2);

  
}

function screeny(){
  save("fotka" + ".jpg");
}
let dozvola = -4;
var brojnost = 10;
var razmak = 1;
let pomT = 80;  
let pomP = 44;  
var time = 0;
var vr=0; var faktor1; var faktor2;
  var offs = 10;
var rand = 1;
var edva = "?"; 
var ejedan = "?"; 

function updateText1(){
  edva = input1.value(); 
}
function updateText2(){
  ejedan = input2.value(); 
}
function draw() { 
  time = frameCount;
  colorMode(HSB, 100);
  background(slider.value(), 60, 60);
   
  translate(70,4);
  vr+=1;  
   
  
   okvir();  
  obrubSlova();  
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
   textSize(222);
  if(dozvola>0)
  textSize(130+80*facy1);                                
   
  text(edva, es-55, height/4 - 35);
     
          var nojz2 = 50*noise(ij*0.01);
  var facy2 = sin(radians(vr+180)+nojz2);    
   textSize(222);
  if(dozvola>0)
  textSize(130+80*facy2);            
   
  text(ejedan, width*0.73-es+85, 3*height/4 - 35 );
     }
  invertBoje();
 
 
}
var moze = 4;
function obrubSlovaY(){
  moze *= 1;
}
function obrubSlova(){
  noStroke();
  if(moze>0){
  strokeWeight(5);
  stroke(255);
  } 
}
var moze2 = -4;
function okvirY(){  moze2 = -4;
}
function okvir(){ 
  if(moze2>0){
   
    textFont(font2);
    textSize(14);
    fill(0);
    text("Contact", width-100,12);
    text("21©", -44,12);
    text("Work  Services  About Us", 241,12);
    
   
   noStroke();
   fill(0);rectMode(CENTER);
              rect(182,15,34,1.5); //crtica na WORK
   rect(width/2-70,5,width*0.98,2);
   rect(-63,13,2,18);
   rect(width/2-70,23,width*0.98,2);
   rect(width-77,25,2,6); 
   rect(width/2-70,29,width*0.98,2);
   rect(-63,115,2,172);
   rect(width/2-70,115+172/2,width*0.98,2);
   rect(width-77,115+172*3/3+5,2,180); 
   rect(width/2-70,123+3*172/2,width*0.98,2);
    
    noStroke(); fill(0);
  
  noStroke(); 
  fill(0); 
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

var moze5 = 4;
function pmSlovaY(){
  moze5*=(-1);
}
function pmSlova(){ 
  if(moze5>0) brojnost = 40;
  else brojnost = 10;
}
function tekst(){
  dozvola*=(-1);
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