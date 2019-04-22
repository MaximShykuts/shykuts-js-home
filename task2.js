function isLetters(str) {
  return (str.match(/[a-zа-я]/ig)) ? str.match(/[a-zа-я]/ig).length : 0;
}
var firstName;
var secondName;
var lastName;
var fullYears;
var gender;
var fullName = '';
var ageInDays = 0;
var futureYears = 0;
var finalMessage = '';
var pension = false;
var correctInput = 5;

do {
  firstName = prompt('Введите вашe имя:', '');
} while (!firstName || (firstName.length < 3) || !isLetters(firstName));

do {
  secondName = prompt('Введите вашe отчество:', '');
} while (!secondName || (secondName.length < 5) || !isLetters(secondName));

do {
  lastName = prompt('Введите вашу фамилию:', '');
} while (!lastName || (lastName.length < 2) || !isLetters(lastName));

do {
  fullYears = parseInt(prompt('Сколько вам лет:', ''), 10);
} while ((isNaN(fullYears)) || (fullYears < 1) || (fullYears > 120));

gender = confirm('Ваш пол - мужской?');

if (gender && (fullYears >= 63)) {
  pension = true;
} else if (!gender && (fullYears >= 58)) {
  pension = true;
}

fullName = firstName + ' ' + secondName + ' ' + lastName;
gender = (gender) ? 'мужской' : 'женский';
ageInDays = Math.floor(fullYears * 365.2425);
futureYears = fullYears + 5;
correctInput = correctInput / 5 * 100;
pension = (pension) ? 'да' : 'нет';
finalMessage = 'ваше ФИО: ' + fullName + '\n' +
  'ваш возраст в годах: ' + fullYears + '\n' +
  'ваш возраст в днях: ' + ageInDays + '\n' +
  'через 5 лет вам будет: ' + futureYears + '\n' +
  'ваш пол: ' + gender + '\n' +
  'вы на пенсии: ' + pension;
alert(finalMessage);