$(function() {

    var html = $('#cv').html();


    var data = {
        name: 'Yuri Tymochko',
        portrait: 'src="img/avatar 03.jpg"',
        about: '3D CAD Designer with over 8 years experience',

        motivationHeading: 'I want to learn Frontend in order to:',
        motivation1: 'Work in a team',
        motivation2: 'Grow both in career and income',
        motivation3: 'Feel an opportunity to work and live anywhere',

        contact1Heading: 'My cell phone number',
        cellNumber: '380932938538',
        contact2Heading: 'My Facebook profile',
        socialLink: 'href="https://www.facebook.com/yurii.tymochko"',
        socialName: 'Facebook profile',

        feedbackHeading: 'My feedback:',
        feedbackParagraph: 'I am very upset with GoIT customer service'
    };

    var content = tmpl(html, data);

    $('body').append(content);

});