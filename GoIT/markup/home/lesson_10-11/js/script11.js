var arrayOfNames = [];

for (var i = 0; i < 5; i++) {
  var nameForArray = prompt ('Please enter name for array (' + (i + 1) + ' of 5)');
  arrayOfNames.push(nameForArray);
  console.log(arrayOfNames);  
}

var userName = prompt ('Please enter user name');
var checkUserName;

for (var i = 0; i < arrayOfNames.length; i++) {
  if (arrayOfNames[i] == userName) {
    checkUserName = userName;
  }
}
  
if (checkUserName == userName) {
  alert (userName + ', вы успешно вошли');
} else {
  alert ('Sorry, we could not find your name in our database');
}