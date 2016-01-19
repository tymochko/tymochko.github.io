  $(function() {
    $('.tabs__list__item__link').on('click', function() {
      $(this).addClass('tabs__list__item__link--active');

      var $unselectedLinks = $('.tabs__list__item__link').not(this);
      $($unselectedLinks).removeClass('tabs__list__item__link--active');

      var $tabNumber = $(this).attr('href');
      var $tabId = $($tabNumber);
      $tabId.addClass('tabs__content--active');

      var $unselectedTabContent = $('.tabs__content').not($tabId);
      $($unselectedTabContent).removeClass('tabs__content--active');
    });

    function hintAppear() {
      $(this).next('.form__span').animate({opacity: "show", marginLeft: "10"}, "slow");
    };

    function hintDisappear() {
      $(this).next('.form__span').animate({opacity: "hide", marginLeft: "40"}, "fast");
    };

    var hintTimeout;
    var $formInput = $('.form__input');

    $formInput.focusin(hintAppear).focusout(hintDisappear);
    $formInput.hover(function() {
      var $hint = $(this).next('.form__span');
      hintTimeout = setTimeout(function() {
        $hint.animate({opacity: "show", marginLeft: "10"}, "slow");
      }, 1000);
    },

      function() {
        clearTimeout(hintTimeout);
        $(this).next('.form__span').animate({opacity: "hide", marginLeft: "40"}, "fast");
      });

    $('.form__button').click(function(event) {
      $('.form__input').next('.form__span').animate({opacity: "show", marginLeft: "10"}, "slow");
      event.preventDefault();
    });

  });