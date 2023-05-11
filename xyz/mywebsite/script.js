const original = document.querySelector("#original");
const secret = document.querySelector("#secret");

const bodi = document.querySelector("body");

secret.style.display = "none";
original.style.display = "flex";

var br = 0;
bodi.onclick = function(){
    if(br % 2 == 0){       
        original.style.display = "none";
        secret.style.display = "flex";
    }
    else{
        original.style.display = "flex";
        secret.style.display = "none";
    }
    br++;
}
