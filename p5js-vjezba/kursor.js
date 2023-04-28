const k = document.getElementsByClassName("kursor");
const tekst1 = document.getElementById("he1");
const tekst2 = document.getElementById("he2");


const handle = e => {
    funk(k[0], e.clientX, e.clientY);
    npfunk(tekst1, tekst2, e.clientX);
}
 

const npfunk = (tekst1, tekst2, x) => {

    if(x > window.innerWidth/2){
        tekst1.dataset.status = "active";
        tekst2.dataset.status = "inactive";

    }
    else{
        tekst2.dataset.status = "active";
        tekst1.dataset.status = "inactive";

    }

}
  

const funk = (kursor, x, y) => {
    kursor.style.left = `${x+width/2-50}px`;
    kursor.style.top = `${y}px`;  
} 



window.onmousemove = e => handle(e); 