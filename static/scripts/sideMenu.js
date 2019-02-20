var sideMenu = (function() {
  var activeClass = 'is-sidemenu',
      $bodyElement = $('body'),
      $container = $('.navbar-collapse');

  function toggleClass() {
    $('.navbar-toggle').click(function () {
        $bodyElement.toggleClass(activeClass);
    });

    $('.navbar-collapse__title').click(function () {
        removeClass();
    });
  }

  function removeClass() {
    $bodyElement.removeClass(activeClass);
  }

	function init() {
    $bodyElement.on('mouseup touchend', function (e) {
      if (!$container.is(e.target) // if the target of the click isn't the container...
        && $container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        if ($bodyElement.hasClass(activeClass)) {
          $bodyElement.toggleClass(activeClass);
        }
      }
    });

    var mq = window.matchMedia("(min-width: 768px)");
    mq.addListener(WidthChange);
    WidthChange(mq);

    function WidthChange(mq) {
      if (mq.matches) {
        removeClass();
      }
    }

    // Toggle is-sidemenu class.
    toggleClass();
	}

	init();

});
