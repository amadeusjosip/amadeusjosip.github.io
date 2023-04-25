window.onbeforeunload = function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};


var avatar = document.getElementById("avatar");   
var divavatar = document.getElementById("divavatar");   

avatar.onmouseenter = function() {hoverIN(); divIN(divavatar);};
avatar.onmouseleave = function() {hoverOUT(); divOUT(divavatar);};

function divIN(divavatar){
    divavatar.style.backgroundColor = "#dbd6d0";
}
function divOUT(divavatar){
    divavatar.style.backgroundColor = "#1c1920";
}


function hoverIN(){
    avatar.style.cursor = "pointer";
    avatar.style.transform = "scale(" + 155 + "%)";
    avatar.style.transition = 0.5 + "s cubic-bezier(0.82, 0, 0.18, 1)";
    avatar.style.mixBlendMode = "difference";
}

function hoverOUT(){ 
    avatar.style.transform = "scale(" + 122 + "%)";
    avatar.style.transition = 0.5 + "s cubic-bezier(0.82, 0, 0.18, 1)";
    avatar.style.mixBlendMode = "normal";
}



var headerC = document.getElementById("headerC");   
var skrivenaA = document.getElementById("skrivenaA");   
var skrivenaB = document.getElementById("skrivenaB");   
var skrivenaC = document.getElementById("skrivenaC");   
var headerM = document.getElementById("headerM");   
var headerS = document.getElementById("headerS");   

var zast;
var zamjenska = 5;
var br = 5;
function slikaIN(fotka, dont1, dont2) {
    fotka.style.display = "block";  
    dont1.style.display = "none";
    dont2.style.display = "none"; 

    if(fotka == zast){
        if(br>0)
            fotka.style.display = "none"; 
        br*=(-1);
    }

    
    zast = fotka;

    
} 



function funkIN(x) {x.style.display = "block";} 
function funkOUT(x) {x.style.display = "none";} 
 
headerC.onmouseenter = function() {funkIN(skrivenaA)};  
headerC.onmouseleave = function() {funkOUT(skrivenaA)};  

 
headerM.onmouseenter = function() {funkIN(skrivenaB)};  
headerM.onmouseleave = function() {funkOUT(skrivenaB)};  

 
headerS.onmouseenter = function() {funkIN(skrivenaC)};  
headerS.onmouseleave = function() {funkOUT(skrivenaC)};  



/*
headerC.onclick = function() {slikaIN(skrivenaA, skrivenaB, skrivenaC)};  
headerM.onclick = function() {slikaIN(skrivenaB, skrivenaA, skrivenaC)};  
headerS.onclick = function() {slikaIN(skrivenaC, skrivenaB, skrivenaA)};  
*/





var pg = document.getElementById("headerC").clientWidth;  
var VD = document.getElementById("version-desktop");  
var aa1 = document.getElementById("aa1");    
var aa2 = document.getElementById("aa2");    
var aa3 = document.getElementById("aa3");    

const koef = 1.0;


pg = document.getElementById("headerC").clientWidth;   

aa1.style.fontSize = pg*koef + "px"; 
aa2.style.fontSize = pg*koef + "px"; 
aa3.style.fontSize = pg*koef + "px"; 
 
 
document.getElementById("bodij").onresize = function() {risajz()};
 
function risajz() {
    pg = document.getElementById("headerC").clientWidth;   

    aa1.style.fontSize = pg*koef + "px"; 
    aa2.style.fontSize = pg*koef + "px"; 
    aa3.style.fontSize = pg*koef + "px";  
    
}


var RP = document.getElementById("avatar").onclick = function() {reloadPage()};


 
function reloadPage(){
    window.location.reload();
    window.scrollTo(0, 0);
} 

/*
const koef = 1.1;

var pg = document.getElementById("three").clientWidth;  
var bd = document.getElementById("bodi");   




const txt1e = document.getElementById("e1");  
const txt2e = document.getElementById("e2");  
const txt3e = document.getElementById("e3");



const podlogaThree1 = document.getElementById("three-1");  
const podlogaThree2 = document.getElementById("three-2");  
const podlogaFour2 = document.getElementById("four-2");
 

pg = document.getElementById("three").clientWidth;   

txt1e.style.fontSize = pg*koef + "px"; 
txt2e.style.fontSize = pg*koef + "px"; 
txt3e.style.fontSize = pg*koef + "px"; 
 
console.log("10k");

document.getElementById("bodi").onresize = function() {promijeni()};
 
function promijeni() {
    pg = document.getElementById("three").clientWidth;  

    txt1e.style.fontSize = pg*koef + "px"; 
    txt2e.style.fontSize = pg*koef + "px"; 
    txt3e.style.fontSize = pg*koef + "px";  
}
 
podlogaThree1.onmouseenter = function() {haverIN(txt1e)};
podlogaThree1.onmouseleave = function() {haverOUT(txt1e)};


podlogaThree2.onmouseenter = function() {haverIN(txt2e)};
podlogaThree2.onmouseleave = function() {haverOUT(txt2e)};


podlogaFour2.onmouseenter = function() {haverIN(txt3e)};
podlogaFour2.onmouseleave = function() {haverOUT(txt3e)};

function haverIN(txt123e) { 
    //bijela
    txt123e.style.color = "#ded5c4"; 
}
function haverOUT(txt123e) { 
    txt123e.style.color = "#1c1920"; 
}

*/

 



/*------------------------------------Renders R-----------------------------*/
var brojSlikeR = 200;
var nextR = document.getElementById("nextR").onclick = function() {
    brojSlikeR++;
    desnoR(brojSlikeR%5);
};
var prevR = document.getElementById("prevR").onclick = function() {
    brojSlikeR--;
    lijevoR(brojSlikeR%5);
};
var slikaR1 = document.getElementById("slikaR1");
var slikaR2 = document.getElementById("slikaR2");
var slikaR3 = document.getElementById("slikaR3");
var slikaR4 = document.getElementById("slikaR4");
var slikaR5 = document.getElementById("slikaR5");
/*----NEXT-----*/
function desnoR(br){
    if(br==3){
        slikaR2.style.display = "none";
        slikaR3.style.display = "flex";
    }
    else if(br==4){
        slikaR3.style.display = "none";
        slikaR4.style.display = "flex";
    }
    else if(br==0){
        slikaR4.style.display = "none";
        slikaR5.style.display = "flex";
    }
    else if(br==1){
        slikaR5.style.display = "none";
        slikaR1.style.display = "flex";
    }
    else if(br==2){
        slikaR1.style.display = "none";
        slikaR2.style.display = "flex";
    }
}
/*----PREV.-----*/
function lijevoR(br){
    if(br==3){
        slikaR4.style.display = "none";
        slikaR3.style.display = "flex";
    }
    else if(br==4){
        slikaR5.style.display = "none";
        slikaR4.style.display = "flex";
    }
    else if(br==0){
        slikaR1.style.display = "none";
        slikaR5.style.display = "flex";
    }
    else if(br==1){
        slikaR2.style.display = "none";
        slikaR1.style.display = "flex";
    }
    else if(br==2){
        slikaR3.style.display = "none";
        slikaR2.style.display = "flex";
    }
}

  




/*------------------------------------Generative G-----------------------------*/
var brojSlikeG = 200;
var nextG = document.getElementById("nextG").onclick = function() {
    brojSlikeG++;
    desnoG(brojSlikeG%5);
};
var prevG = document.getElementById("prevG").onclick = function() {
    brojSlikeG--;
    lijevoG(brojSlikeG%5);
};
var slikaG1 = document.getElementById("slikaG1");
var slikaG2 = document.getElementById("slikaG2");
var slikaG3 = document.getElementById("slikaG3");
var slikaG4 = document.getElementById("slikaG4");
var slikaG5 = document.getElementById("slikaG5");
/*----NEXT-----*/
function desnoG(br){
    if(br==3){
        slikaG2.style.display = "none";
        slikaG3.style.display = "flex";
    }
    else if(br==4){
        slikaG3.style.display = "none";
        slikaG4.style.display = "flex";
    }
    else if(br==0){
        slikaG4.style.display = "none";
        slikaG5.style.display = "flex";
    }
    else if(br==1){
        slikaG5.style.display = "none";
        slikaG1.style.display = "flex";
    }
    else if(br==2){
        slikaG1.style.display = "none";
        slikaG2.style.display = "flex";
    }
}
/*----PREV.-----*/
function lijevoG(br){
    if(br==3){
        slikaG4.style.display = "none";
        slikaG3.style.display = "flex";
    }
    else if(br==4){
        slikaG5.style.display = "none";
        slikaG4.style.display = "flex";
    }
    else if(br==0){
        slikaG1.style.display = "none";
        slikaG5.style.display = "flex";
    }
    else if(br==1){
        slikaG2.style.display = "none";
        slikaG1.style.display = "flex";
    }
    else if(br==2){
        slikaG3.style.display = "none";
        slikaG2.style.display = "flex";
    }
}

  



/*-------ANIMACIJA NA SCROLL------------------*/
const obs01 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scroll01GR');
        }
        else{
            entry.target.classList.remove('scroll01GR');
        }
 
    });
}); 

const ind01 = document.querySelectorAll('.item01R');
ind01.forEach((el) => obs01.observe(el));




const obs02 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scroll01GR');
        }
        else{
            entry.target.classList.remove('scroll01GR');
        }
 
    });
}); 

const ind02 = document.querySelectorAll('.item01G');
ind02.forEach((el) => obs02.observe(el));




const obs03 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scroll02GR');
        }
        else{
            entry.target.classList.remove('scroll02GR');
        }
 
    });
}); 

const ind03 = document.querySelectorAll('.item02R');
ind03.forEach((el) => obs03.observe(el));




const obs04 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scroll02GR');
        }
        else{
            entry.target.classList.remove('scroll02GR');
        }
 
    });
}); 

const ind04 = document.querySelectorAll('.item02G');
ind04.forEach((el) => obs04.observe(el));

/*---contact scroll animacije*/

const obsK1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scrollK1234');
        }
        else{
            entry.target.classList.remove('scrollK1234');
        }
 
    });
}); 

const indK1 = document.querySelectorAll('.itemK1');
indK1.forEach((el) => obsK1.observe(el));


const obsK2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scrollK1234');
        }
        else{
            entry.target.classList.remove('scrollK1234');
        }
 
    });
}); 

const indK2 = document.querySelectorAll('.itemK2');
indK2.forEach((el) => obsK2.observe(el));




const obsK3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scrollK1234');
        }
        else{
            entry.target.classList.remove('scrollK1234');
        }
 
    });
}); 

const indK3 = document.querySelectorAll('.itemK3');
indK3.forEach((el) => obsK3.observe(el));




const obsK4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scrollK1234');
        }
        else{
            entry.target.classList.remove('scrollK1234');
        }
 
    });
}); 

const indK4 = document.querySelectorAll('.itemK4');
indK4.forEach((el) => obsK4.observe(el));


/*avatar animacija mobile*/
const obsA1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scrollA1');
        }
        else{
            entry.target.classList.remove('scrollA1');
        }
 
    });
}); 

const indA1 = document.querySelectorAll('.itemA1');
indA1.forEach((el) => obsA1.observe(el));




/*reveal images animacija mobile*/
const sT = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scrollTrans');
        }
        else{
            entry.target.classList.remove('scrollTrans');
        }
 
    });
}); 

const indST = document.querySelectorAll('.slikaTrans');
indST.forEach((el) => sT.observe(el));

