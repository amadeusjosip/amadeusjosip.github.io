const web = document.getElementById("UL");
const contact = document.getElementById("UR");
const linkIN = document.getElementById("regLinkIN");
const linkIG = document.getElementById("regLinkIG");

/////////////////////////////////////////////////
web.onmouseenter = function(){
    web.style.cursor = "pointer";
    web.style.letterSpacing = "5px";
    web.style.transition = "0.8s cubic-bezier(0.8, 0, 0.2, 1)";
}
web.onmouseleave = function(){
    web.style.letterSpacing = "normal";
    web.style.transition = "1.2s cubic-bezier(0.8, 0, 0.2, 1)";
}
/////////////////////////////////////////////////
contact.onmouseenter = function(){
    contact.style.cursor = "pointer";
    contact.style.letterSpacing = "5px";
    contact.style.transition = "0.8s cubic-bezier(0.8, 0, 0.2, 1)";
}
contact.onmouseleave = function(){
    contact.style.letterSpacing = "normal";
    contact.style.transition = "1.2s cubic-bezier(0.8, 0, 0.2, 1)";
}
/////////////////////////////////////////////////
linkIN.onmouseenter = function(){
    linkIN.style.cursor = "pointer";
    linkIN.style.letterSpacing = "5px";
    linkIN.style.transition = "0.8s cubic-bezier(0.8, 0, 0.2, 1)";
}
linkIN.onmouseleave = function(){
    linkIN.style.letterSpacing = "normal";
    linkIN.style.transition = "1.2s cubic-bezier(0.8, 0, 0.2, 1)";
}
/////////////////////////////////////////////////
linkIG.onmouseenter = function(){
    linkIG.style.cursor = "pointer";
    linkIG.style.letterSpacing = "5px";
    linkIG.style.transition = "0.8s cubic-bezier(0.8, 0, 0.2, 1)";
}
linkIG.onmouseleave = function(){
    linkIG.style.letterSpacing = "normal";
    linkIG.style.transition = "1.2s cubic-bezier(0.8, 0, 0.2, 1)";
}



const seen = document.getElementById("seen");
const seen2 = document.getElementById("seen2");
const seen3 = document.getElementById("seen3");
///////clickity-clicks seen2//////////////////
var brojac2 = 0;
var brojac3 = 0;
function websiteReveal() {
    brojac3 = 0;
    if(brojac2%2==0){
        seen.style.display = "none"; 
        seen2.style.display = "grid"; 
        seen3.style.display = "none";  
    }
    else{
        seen.style.display = "flex";
        seen3.style.display = "none";
        seen2.style.display = "none";
    }

    brojac2++;
}
web.addEventListener("click", websiteReveal);

///////clickity-clicks seen3//////////////////
function contactReveal() {
    brojac2 = 0;
    if(brojac3%2==0){
        seen.style.display = "none"; 
        seen2.style.display = "none"; 
        seen3.style.display = "grid"; 
    }
    else{
        seen.style.display = "flex";
        seen3.style.display = "none";
        seen2.style.display = "none";
    }

    brojac3++;
}
contact.addEventListener("click", contactReveal);