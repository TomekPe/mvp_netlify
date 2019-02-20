$( document ).ready(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  // Smooth scrolling to the anchors
  $('a.page-scroll').bind('click', function(e) {
    var $offset = 0; // Header height
    var $href = $(this).attr('href');
    $href = $href.replace('/', '');
    $('html, body')
      .stop()
      .velocity(
        "scroll",
        {
          duration: 1000,
          offset: $($href).offset().top - $offset,
        },
        "ease-in-out"
      );
    event.preventDefault();
  });

  $('.package').bind('click', function() {
    $index = $('.package').index(this);
    $('.package').removeClass('active');
    $('.package__description').removeClass('active');
    $(this).addClass('active');
    $('.package__description').eq($index).addClass('active');

    $viewport_height = $(window).height();
    $package_descriptions_height = $('.package__descriptions').outerHeight();

    var mq = window.matchMedia( "(min-width: 992px)" ),
        $offset = $('.package__descriptions').offset().top;

    if (mq.matches) {
      $offset = $('.package__descriptions').offset().top - ($viewport_height - $package_descriptions_height);
    }

    $('html, body')
      .stop()
      .velocity(
        "scroll",
        {
          duration: 300,
          offset: $offset,
        },
        "ease-in-out"
      );
  });

  $('.contact__tab-link[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $index = $('.contact__tab-link[data-toggle="tab"]').index(e.target);
    $prevIndex = $('.contact__tab-link[data-toggle="tab"]').index(e.relatedTarget);
    $('.contact').removeClass('contact--' + ($prevIndex + 1));
    $('.contact').addClass('contact--' + ($index + 1));
  });

  var owl = $('.our-clients__carousel');
  if (owl.length) {
    owl.owlCarousel({
//      autoplay: true,
      items: 1,
      smartSpeed: 1000,
      loop: true,
      margin: 50,
      nav: true,
      touchDrag: false,
      pullDrag: false,
      mouseDrag: false,
      navText: ["<span class='glyphicon glyphicon-menu-left'></span>", "<span class='glyphicon glyphicon-menu-right'></span>"]
    });
  }

  cbpAnimatedHeader();
  sideMenu();
});

$(window).load(function() {

});
