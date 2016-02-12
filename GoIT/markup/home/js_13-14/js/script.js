'use strict';

$(function () {
    var html = $('#test').html();

    var data = {
        heading: "Тест з програмування",

        question1: 'Що означає поняття глобальна змінна?',
        answer11: 'Змінна, оголошена в контексті обєкту window',
        answer12: 'Змінна, котра глобально змінює код',
        answer13: 'Змінна, котра перезаписує системний код браузера',

        question2: 'Для чого використовується ключове слово var',
        answer21: 'Для створення нової змінної',
        answer22: 'Для виведення повідомлення в модальному вікні',
        answer23: 'Для задання ключа сімейства var',

        question3: 'Що позначає команда debugger?',
        answer31: 'Це команда браузерові виконувати даний код в режимі налагодження',
        answer32: 'Ця команда зупиняє виконання коду і відкриває режим налагодження в браузері',
        answer33: 'Ця команда починає виконувати код з поточного місця',
        
        warning: '! Необхідно обрати одну правильну відповідь для кожного запитання !',

        submitValue: 'Перевірити мої результати'
    };

    localStorage.setItem('testQuestions', JSON.stringify(data));
    var objData = localStorage.getItem('testQuestions');

    objData = JSON.parse(objData);
    var content = tmpl(html, objData);

    $('body').append(content);

    // Setting up data for popup modal window
    var popup = $('#popup').html();

    var popupData = {
        popupMessage: 'Усі відповіді правильні. Вітаємо.'
    };
    
    $('label, input').on('click', function() {
        $('.warning-disable').removeClass('warning-enable');
    });

    $('form').submit(function( event ) {
        event.preventDefault();
        var $user = $( this ).serializeArray();
        
        if ($user.length < 3 || $user.length > 4) {
            $('.warning-disable').addClass('warning-enable');
            return;
        };

        var val1 = $user[0].value;
        var val2 = $user[1].value;
        var val3 = $user[2].value;

        console.log( val1 );
        console.log( val2 );
        console.log( val3 );

        if (val1 == 'answer11' && val2 == 'answer21' && val3 == 'answer32') {
            localStorage.setItem('testAnswer', JSON.stringify(popupData));
            var objPopupData = localStorage.getItem('testAnswer');

            objPopupData = JSON.parse(objPopupData);
            var contentPopupMessage = objPopupData.popupMessage;
        } else if (val1 == undefined || val2 == undefined || val3 == undefined) {
            console.log('Ooops');
        } else {
            contentPopupMessage = 'Нажаль не вірно. Спробуйте ще.';
        };

        $('.popup__message').text(contentPopupMessage);

        $('.popup-disable').addClass('popup-enable').animate({
            opacity:1
        });

        $('.popup__window').animate({
            marginTop: '230px',
            opacity: 1
        });
    });

    $('.popup__button').on('click', function() {
        event.preventDefault();
        $('.popup-disable').removeClass('popup-enable');
        $('.listItemCheckbox').removeAttr('checked');
    })

});