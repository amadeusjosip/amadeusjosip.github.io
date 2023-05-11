const original = document.querySelector("#original");
const secret = document.querySelector("#secret");

const gumb = document.querySelector("body");
 

original.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
original.style.transform = "translateY(0px)"; 
original.style.opacity = "1";
original.style.transition = "1.38s cubic-bezier(0.76, 0, 0.24, 1)";

secret.style.transform = "translateY(30px)";
secret.style.transition = "1.38s cubic-bezier(0.76, 0, 0.24, 1)";


var br = 0;
gumb.onclick = function(){
    if(br % 2 == 0){       
        original.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"; 
        original.style.transform = "translateY(-20px)";
        original.style.opacity = "0";
        original.style.transition = "1.38s cubic-bezier(0.76, 0, 0.24, 1)";

        secret.style.transform = "translateY(0px)";
        secret.style.transition = "1.38s cubic-bezier(0.76, 0, 0.24, 1)";
    }
    else{
        original.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
        original.style.transform = "translateY(0px)"; 
        original.style.opacity = "1";
        original.style.transition = "1.38s cubic-bezier(0.76, 0, 0.24, 1)";

        secret.style.transform = "translateY(30px)";
        secret.style.transition = "1.38s cubic-bezier(0.76, 0, 0.24, 1)";
    }
    br++;
}
