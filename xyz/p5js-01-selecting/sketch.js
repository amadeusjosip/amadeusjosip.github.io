var canvas;
const myP = document.getElementById("drugiP");
let prviParagraf;
function setup() {
    canvas = createCanvas(300, 200);
    canvas.id('canvas');
    background(0, 0, 180);

    prviParagraf = select("#prviP");
    prviParagraf.style("color", "white");
    prviParagraf.style("font-weight", "bold");
    prviParagraf.style("background-color", "#222");
    prviParagraf.style("font-family", "Helvetica");
    prviParagraf.style("font-size", "30px");



  }
  
  var m = 0;
  
  function draw() {
    m+=2;
    background(0, 0, 180);
    var a = floor(mouseX);
    myP.innerHTML = a;

    if(a < 0)
    myP.style.height = "300px";
    else
    myP.style.height = "30px";

    myP.style.fontSize = "21px";
    myP.style.fontFamily = "Verdana";


    if(m<900)
    canvas.parent("drugiDiv");
    else
    canvas.parent("sketch");

    
    ellipse(mouseX, mouseY, 50, 50);
  }
  