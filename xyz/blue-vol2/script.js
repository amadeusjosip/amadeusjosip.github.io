const original = document.getElementById("original");
const secret = document.getElementById("secret");
const button = document.querySelector("button");
var br = 0;

button.onclick = function(){
    if(br % 2 == 0){ 
        original.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
        original.style.transition = "1.2s cubic-bezier(0.8, 0, 0.2, 1)"; 
    }
    else{ 
        original.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
        original.style.transition = "1.2s cubic-bezier(0.8, 0, 0.2, 1)"; 
    }
    br++;
}
