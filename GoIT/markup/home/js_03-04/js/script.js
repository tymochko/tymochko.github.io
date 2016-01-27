var div = document.createElement('div');
div.className = 'heading';
div.innerHTML = 'Тест по программированию';

document.body.appendChild(div);

var form = document.createElement('form');
form.method = 'get';

document.body.appendChild(form);

var listGeneral = document.createElement('ul');
listGeneral.className = 'listGeneral';

form.appendChild(listGeneral);

var questionsNumber = 4;
var answersNumber = 4;

for (var i = 1; i < questionsNumber; i++) {
  var listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML = i + '. Вопрос №' + i;

  listGeneral.appendChild(listItem);

  var listChecklist = document.createElement('ul');
  listChecklist.className = 'listChecklist';

  listItem.appendChild(listChecklist);

  for (var j = 1; j < answersNumber; j++) {
    var listItemHolder = document.createElement('li');
    listItemHolder.className = 'listItemHolder';

    listChecklist.appendChild(listItemHolder);

    var listItemCheckbox = document.createElement('input');
    listItemCheckbox.name = 'answerCheckbox';
    listItemCheckbox.value = 'answer' + j;
    listItemCheckbox.className = 'listItemCheckbox';
    listItemCheckbox.type = 'checkbox';
    listItemCheckbox.id = 'answer' + j;

    listItemHolder.appendChild(listItemCheckbox);

    var listItemLabel = document.createElement('label');
    listItemLabel.name = 'answerLabel';
    listItemLabel.for = 'answer' + j;
    listItemLabel.className = 'listItemLabel';
    listItemLabel.type = 'checkbox';
    listItemLabel.innerHTML = 'Вариант ответа №' + j + '<br>';

    listItemHolder.appendChild(listItemLabel);
  };
};

var submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'Проверить мои результаты';
submit.className = 'submit';

form.appendChild(submit);