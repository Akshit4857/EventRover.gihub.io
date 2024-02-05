 var typed = new Typed(".rover-type",{
      strings: ["Rover"],
      typeSpeed: 200,
      backSpeed:200,
      loop:true
    });

  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  const faqs = document.querySelectorAll(".accordian");

  faqs.forEach((accordian) => {
    accordian.addEventListener("click", () => {
      accordian.classList.toggle("active");
    });
  });
    