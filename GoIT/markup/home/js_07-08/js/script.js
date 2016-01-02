  $(function() {
    $('.tabs__list__item__link').on('click', function() {
      $(this).addClass('tabs__list__item__link--active');

      var $unselectedLinks = $('.tabs__list__item__link').not(this);
      $($unselectedLinks).removeClass('tabs__list__item__link--active');

      var $tabNumber = $(this).attr('title');
      $tabNumber = '#' + $tabNumber;
      var $tabId = $($tabNumber);
      $tabId.addClass('tabs__content--active');

      var $unselectedTabContent = $('.tabs__content').not($tabId);
      $($unselectedTabContent).removeClass('tabs__content--active');
    });

    $('.form__input').hover(function() {
      $(this).next('.form__span').animate({opacity: "show", marginLeft: "10"}, "slow");
    },
      function() {
        $(this).next('.form__span').animate({opacity: "hide", marginLeft: "40"}, "fast");
      });

    $('.form__input').focusin(function() {
      $(this).next('.form__span').animate({opacity: "show", marginLeft: "10"}, "slow");
    });

    $('.form__input').focusout(function() {
      $(this).next('.form__span').animate({opacity: "hide", marginLeft: "40"}, "fast");
    });

    $('.form__button').click(function() {
      $('.form__input').next('.form__span').animate({opacity: "show", marginLeft: "10"}, "slow");
    })

  });