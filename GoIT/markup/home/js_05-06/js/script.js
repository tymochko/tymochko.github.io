var buttonStart = document.getElementById('button-start');

function switchButtonPause() {
  buttonStart.textContent = 'PAUSE';
};

function switchButtonStart() {
  buttonStart.textContent = 'START';
};

buttonStart.addEventListener('click', switchButtonPause);
buttonStart.addEventListener('click', timerId);

var timerMiliseconds;

function timerId() {
  timerMiliseconds = setInterval(timeChange, 1);
};

var miliseconds = document.getElementById('miliseconds');
var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');
var hours = document.getElementById('hours');

miliseconds.textContent = '000';
seconds.textContent = '00';
minutes.textContent = '00';
hours.textContent = '00';
//
//miliseconds = +(miliseconds.textContent);
//seconds = +(seconds.textContent);
//minutes = +(minutes.textContent);
//hours = +(hours.textContent);

function timeChange() {

  for (var ms = 0; ms < 1000; ms++) {
    if (ms < 10) {
      miliseconds.textContent = '00' + ms;
    } else if (ms >= 100) {
      miliseconds.textContent = ms;
    } else {
      miliseconds.textContent = '0' + ms;
    };
  };

  miliseconds.textContent = '000';

  for (var s = 0; s < 60; s++) {
    if (s < 10) {
      seconds.textContent = '0' + s;
    } else {
      seconds.textContent = s;
    };
  };

  seconds.textContent = '00';

  for (var m = 0; m < 60; m++) {
    if (m < 10) {
      minutes.textContent = '0' + m;
    } else {
      minutes.textContent = m;
    };
  };

  minutes.textContent = '00';

  for (var h = 0; h < 24; h++) {
    if (h < 10) {
      hours.textContent = '0' + h;
    } else {
      hours.textContent = h;
    };
  };

  hours.textContent = '00';
};

function pauseTimer() {
  buttonStart.addEventListener(switchButtonStart);
  clearInterval(timerMiliseconds);
}

var buttonPause = buttonStart;
buttonPause.addEventListener('click', pauseTimer);

function clearTimer() {
  buttonStart.removeEventListener(switchButtonPause);
  clearInterval(timerMiliseconds);

  hours.textContent = '00';
  minutes.textContent = '00';
  seconds.textContent = '00';
  miliseconds.textContent = '000';
}

var buttonClear = document.getElementById('button-clear');
buttonClear.addEventListener('click', clearTimer);
buttonClear.addEventListener('click', switchButtonStart);


