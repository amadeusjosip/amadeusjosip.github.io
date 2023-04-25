const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry) 
      if (entry.isIntersecting) {
        entry.target.classList.add('scrollani');
      } else {
        entry.target.classList.remove('scrollani');
      }
    });
  });
  
  const x = Array.from(document.querySelectorAll('.kvadrat'));
  x.forEach((el) => observer.observe(el));
  
