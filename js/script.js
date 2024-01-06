
  $(function () {
    $('.carousel-slick').slick({
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });