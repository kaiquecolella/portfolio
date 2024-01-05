
  $(function () {
    $('.carousel-slick').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      centerMode: true,
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