var miliseconds = document.getElementById('miliseconds');
var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hours = document.getElementById('hours');

miliseconds.textContent = '00';
seconds.textContent = '00';
minutes.textContent = '00';
hours.textContent = '00';

var ms = 0;
var s = 0;
var m = 0;
var h = 0;

var buttonStart = document.getElementById('button-start');

buttonStart.addEventListener('click', switchButtonPause);
buttonStart.addEventListener('click', timerId);

function switchButtonPause() {
  buttonStart.textContent = 'PAUSE';
  //document.getElementById('button-start').setAttribute('id', 'button-pause');
};

function switchButtonStart() {
  buttonStart.textContent = 'START';
  //document.getElementById('button-pause').setAttribute('id', 'button-start');
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

//var buttonPause = document.getElementById('button-pause');
//buttonPause.addEventListener('click', pauseTimer);
//
//function pauseTimer() {
//  buttonPause.addEventListener('click', switchButtonStart);
//  //buttonPause.textContent = 'START';
//  //clearInterval(timerMiliseconds);
//  //document.getElementById('button-pause').setAttribute('id', 'button-start');
//};

var buttonClear = document.getElementById('button-clear');
buttonClear.addEventListener('click', clearTimer);

function clearTimer() {
  buttonStart.removeEventListener(switchButtonPause);
  buttonStart.removeEventListener(timerId);
  buttonStart.textContent = 'START';
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