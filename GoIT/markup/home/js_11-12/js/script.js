$(function() {
  
  var html = $('#cv').html();
  var data = {
    title: 'Hello'
  };

  //
  //var heading = [
  //  {
  //    h1: 'Yuri Tymochko',
  //    img: 'img/avatar 03.jpg',
  //    p: '3D CAD Designer with over 8 years experience'
  //  }
  //];

  //var motivation = [
  //  {
  //    h3: 'I want to learn Frontend in order to:'
  //  },
  //
  //  {
  //    li: 'Work in a team'
  //  },
  //
  //  {
  //    li: 'Grow both in career and income'
  //  },
  //
  //  {
  //    li: 'Feel an opportunity to work and live anywhere'
  //  }
  //];
  //
  //var contacts = [
  //  {
  //    p: 'My cell phone number'
  //  },
  //
  //  {
  //    p: '380932938538'
  //  },
  //
  //  {
  //    p: 'My Facebook profile'
  //  },
  //
  //  {
  //    a: 'https://www.facebook.com/yurii.tymochko'
  //  }
  //];

  //var content = tmpl(html, {
  //  data: heading
  //});
  //
  var content = tmpl(html, data);

  $('body').append(content);
});