const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scroll-1');
        }
        else{
            entry.target.classList.remove('scroll-1');
        }
 
    });
}); 

const hiddenElements1 = document.querySelectorAll('.item-1');
hiddenElements1.forEach((el) => observer1.observe(el));
///////////////////////////



const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scroll-2i3');
        }
        else{
            entry.target.classList.remove('scroll-2i3');
        }
 
    });
}); 

const hiddenElements2 = document.querySelectorAll('.item-2');
hiddenElements2.forEach((el) => observer2.observe(el));
///////////////////////////


const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scroll-2i3');
        }
        else{
            entry.target.classList.remove('scroll-2i3');
        }
 
    });
}); 

const hiddenElements3 = document.querySelectorAll('.item-3');
hiddenElements3.forEach((el) => observer3.observe(el));
///////////////////////////


const observer0 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scroll-0');
        }
        else{
            entry.target.classList.remove('scroll-0');
        }
 
    });
}); 

const hiddenElements0 = document.querySelectorAll('.item-0');
hiddenElements0.forEach((el) => observer0.observe(el));
///////////////////////////

const observerx = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) 
        if(entry.isIntersecting){
            entry.target.classList.add('scroll-x');
        }
        else{
            entry.target.classList.remove('scroll-x');
        }
 
    });
}); 

const hiddenElementsx = document.querySelectorAll('.item-x');
hiddenElementsx.forEach((el) => observerx.observe(el));
///////////////////////////
