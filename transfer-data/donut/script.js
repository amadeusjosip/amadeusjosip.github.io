const prev = document.getElementById("prev");
const nxt = document.getElementById("nxt");


const pn = document.getElementById("pn");


const sl01 = document.getElementById("sl01");
const sl02 = document.getElementById("sl02");



var br = 0;
pn.onclick = function(){
    if(br%2==0){
        sl01.style.display = "none";
        sl02.style.display = "flex";
    }
    else{
        sl02.style.display = "none";
        sl01.style.display = "flex";
    }
    br++;
}

/*
var brP = 0;
prev.onclick = function(){
    if(brP%2==0){
        sl01.style.display = "none";
        sl02.style.display = "flex";
    }
    else{
        sl02.style.display = "none";
        sl01.style.display = "flex";
    }
    brP++;
}

var brN = 0;
nxt.onclick = function(){
    if(brN%2==0){
        sl01.style.display = "none";
        sl02.style.display = "flex";
    }
    else{
        sl02.style.display = "none";
        sl01.style.display = "flex";
    }
    brN++;
}

*/