var miliseconds = document.querySelector('.timer-screen__numbers--miliseconds');
var seconds = document.querySelector('.timer-screen__numbers--seconds');
var minutes = document.querySelector('.timer-screen__numbers--minutes');
var hours = document.querySelector('.timer-screen__numbers--hours');

miliseconds.textContent = '00';
seconds.textContent = '00';
minutes.textContent = '00';
hours.textContent = '00';

var ms = 0;
var s = 0;
var m = 0;
var h = 0;

var buttonStart = document.querySelector('.button-start');

buttonStart.addEventListener('click', clickButtonPause);
buttonStart.addEventListener('click', timerId);

function clickButtonPause() {
  buttonStart.className = buttonStart.className += ' button-disappear';
  buttonPause.className = buttonPause.className.replace(' button-disappear','');
};

function clickButtonStart() {
  buttonStart.className = buttonStart.className.replace(' button-disappear', '');
  buttonPause.className = buttonPause.className += ' button-disappear';
};

// This variable must be global in order to clearInterval in another function
var timerMiliseconds;

function timerId() {
  timerMiliseconds = setInterval(timeChange, 10);
};

function timeChange() {

  ms++;
  if (ms < 10) {
    miliseconds.textContent = '0' + ms;
  } else if(ms == 100) {
    miliseconds.textContent = '00';
    ms = 0;
    s++;
  } else {
    miliseconds.textContent = ms;
  };

  if (s < 10) {
    seconds.textContent = '0' + s;
  } else if(s == 60) {
    seconds.textContent = '00';
    s = 0;
    m++;
  } else {
    seconds.textContent = s;
  };

    if (m < 10) {
      minutes.textContent = '0' + m;
    } else if (m == 60) {
      minutes.textContent = '00';
      m = 0;
      h++;
    } else {
      minutes.textContent = m;
    };

    if (h < 10) {
      hours.textContent = '0' + h;
    } else if (h == 24) {
      hours.textContent = '00';
      h = 0;
    } else {
      hours.textContent = h;
    };

};

var buttonPause = document.querySelector('.button-pause');
buttonPause.addEventListener('click', pauseTimer);

function pauseTimer() {
  buttonPause.addEventListener('click', clickButtonStart);
  clearInterval(timerMiliseconds);
};

var buttonClear = document.querySelector('.button-clear');
buttonClear.addEventListener('click', clearTimer);
buttonClear.addEventListener('click', clickButtonStart);

function clearTimer() {
  clearInterval(timerMiliseconds);

  miliseconds.textContent = '00';
  seconds.textContent = '00';
  minutes.textContent = '00';
  hours.textContent = '00';

  ms = 0;
  s = 0;
  m = 0;
  h = 0;
};