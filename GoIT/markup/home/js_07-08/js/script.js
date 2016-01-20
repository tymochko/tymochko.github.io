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

    var $formInput = $('.form__input');

    function hintAppear() {
      $(this).next('.form__span').animate({opacity: "show", marginLeft: "10"}, "slow");
    };

    function hintDisappear() {
      $(this).next('.form__span').animate({opacity: "hide", marginLeft: "40"}, "fast");
    };

    var hintTimeout;

    $formInput.focusin(hintAppear).focusout(hintDisappear);

    $formInput.hover(function() {
      var $hint = $(this).next('.form__span');
      hintTimeout = setTimeout(hintAppear.bind(this), 1000);
    },

      function() {
        clearTimeout(hintTimeout);
        hintDisappear.call(this);
      });

    $('.form__button').click(function(event) {
      $('.form__input').next('.form__span').animate({opacity: "show", marginLeft: "10"}, "slow");
      event.preventDefault();
    });

  });