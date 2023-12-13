document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;    
  document.querySelector(".next").onclick = () => {
      showSlides(slideIndex += 1);
  }

  document.querySelector(".prev").onclick = () =>{
      showSlides(slideIndex -= 1);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

 
  showSlides(slideIndex);

  function showSlides(n) {

      let slides = document.querySelectorAll(".image");
      let dots = document.querySelectorAll(".dot");

      if (n >= slides.length) {
          slideIndex = 0
      }
      if (n < 0) {
          slideIndex = slides.length - 1
      }

      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }

      for (let i = 0; i < dots.length; i++) {
          dots[i].classList.remove("active");
      }
      slides[slideIndex].style.display = "block";
      dots[slideIndex].classList.add("active");
  }
});
