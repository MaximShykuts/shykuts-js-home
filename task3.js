function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var arr = [];
var sum = 0;

do {
  var input = prompt('Введите суммируемое значение', '');
  arr.push(+input);
} while (isNumeric(input));

arr.length = arr.length - 1;

for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}

if (arr.length === 0) {
  alert('Вы не ввели ни одного числа.')
} else {
  alert('Сумма введённых вами чисел: ' + sum + '\n' + 'Вы ввели следующие числа: ' + arr);
}