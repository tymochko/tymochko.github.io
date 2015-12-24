var buttonStart = document.getElementById('button-start');

function switchButtonPause() {
  buttonStart.innerHTML = 'PAUSE';
};

function switchButtonStart() {
  buttonStart.innerHTML = 'START';
};

buttonStart.addEventListener('click', switchButtonPause);
buttonStart.addEventListener('click', timerId);

var timerMiliseconds;
var timerSeconds;
var timerMinutes;
var timerHours;

function timerId() {
  timerMiliseconds = setInterval(timeChangeMiliseconds, 10);
  timerSeconds = setInterval(timeChangeSeconds, 1000);
  timerMinutes = setInterval(timeChangeMinutes, 1000);
  timerHours = setInterval(timeChangeHours, 1000);
};

function timeChangeMiliseconds() {
  var miliseconds = document.getElementById('miliseconds');

  for (var ms = 0; ms < 1000; ms++) {
    if(ms < 10) {
      miliseconds.innerHTML = '00' + ms;
    } else if(ms >= 100) {
      miliseconds.innerHTML = ms;
    } else {
      miliseconds.innerHTML = '0' + ms;
    };
  };
};

function timeChangeSeconds() {
  var seconds = document.getElementById('seconds');

  for (var s = 0; s < 60; s++) {
    if(s < 10) {
      seconds.innerHTML = '0' + s;
    } else {
      seconds.innerHTML = s;
    };
  };
};

function timeChangeMinutes() {
  var minutes = document.getElementById('minutes');

  for (var m = 0; m < 60; m++) {
    if(m < 10) {
      minutes.innerHTML = '0' + m;
    } else {
      minutes.innerHTML = m;
    };
  };
};

function timeChangeHours() {
  var hours = document.getElementById('hours');

  for (var h = 0; h < 60; h++) {
    if(h < 10) {
      hours.innerHTML = '0' + h;
    } else {
      hours.innerHTML = h;
    };
  };
};

function clearTimer() {
  buttonStart.removeEventListener(switchButtonPause);
  clearInterval(timerMiliseconds);
  clearInterval(timerSeconds);
  clearInterval(timerMinutes);
  clearInterval(timerHours);

  hours.innerHTML = '00';
  minutes.innerHTML = '00';
  seconds.innerHTML = '00';
  miliseconds.innerHTML = '000';
}

var buttonClear = document.getElementById('button-clear');
buttonClear.addEventListener('click', clearTimer);
buttonClear.addEventListener('click', switchButtonStart);


