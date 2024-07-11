window.addEventListener("scroll", changeBg)
function changeBg() {
    let navbar = document.getElementById("navi")
    if (window.scrollY < 50) {
        navbar.classList.remove("sabit-header")
    } else {
        navbar.classList.add("sabit-header")
    }
}

$(document).ready(function () {
    $(".home-slider").owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});

$(document).ready(function(){
    $('.home-slider ').owlCarousel({
    });
  
    $('.carousel-prev').click(function() {
      $('.home-slider').trigger('prev.owl.carousel');
    });
  
    $('.carousel-next').click(function() {
      $('.home-slider').trigger('next.owl.carousel');
    });
  });


  $(document).ready(function () {
    $(".hakkimizda-owl").owlCarousel({
        loop: true,
        items: 1,
    });
});


$(document).ready(function(){
    $('.hakkimizda-owl').owlCarousel({
    });
  
    $('.carousel-prev').click(function() {
      $('.hakkimizda-owl').trigger('prev.owl.carousel');
    });
  
    $('.carousel-next').click(function() {
      $('.hakkimizda-owl').trigger('next.owl.carousel');
    });
  });

  

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1
    });
});