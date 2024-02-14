var canvas; 
var slider1; //slider za razmak/gustocu medu slovima
var slider2; //slider za velicinu samih slova
var tekstP1; //tekst za slider1
var tekstP2; //tekst za slider2
var gumb;


//funkcija setup
function setup() {   
  rectMode(CENTER);
  canvas = createCanvas(500, 500); //dimenzije ekrana 
  canvas.position(windowWidth/2 - 250, windowHeight/2 - 250); 

   
  //slider1
  tekstP1 = createP("Gustoca slova: ");
  tekstP1.position(300, windowHeight - 200);
  slider1 = createSlider(10, 25, 21);
  slider1.position(130 + 300, windowHeight - 200 + 15);
  //slider2
  tekstP2 = createP("Velicina fonta: ");
  tekstP2.position(300, windowHeight - 200 + 45 - 15);
  slider2 = createSlider(10, 25, 18);
  slider2.position(130 + 300, windowHeight - 200 + 45);
  
  //gumb
  gumb = createButton("SAVE as GIF"); 
  gumb.position(300, windowHeight - 200 + 80);
  gumb.mousePressed(sejvajGIF);   
} 


  
//funkcija draw
var vrijeme = 0;
function draw() {   
  background(0, 0, 0);
     
  var pomak = slider1.value();
  var velicina_slova = slider2.value();
 
 

  for(var y = 50; y < 450; y+=pomak){
    for(var x = 50; x < 450; x+=pomak){
      var gore_dolje = 10*cos(radians(vrijeme)); 
      push();
      translate(x, y); 
      stroke(255);
      fill(255);
      textSize(velicina_slova);
      text("d",0, gore_dolje);
      pop();
    }
  }
  

  vrijeme = vrijeme + 4; //varijabla vrijeme koja je u pocetku bila 0, svaki frejm se povecava za 4, to nam omogucuje da radimo animaciju i da nije staticno
} 


//za sejvanje gifa
function sejvajGIF(){ 
  saveGif('theGIF.gif', 180, {delay: 0, units : 'frames'}); 
}