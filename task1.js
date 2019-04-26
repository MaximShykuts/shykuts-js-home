'use strict';

function myFunc(n) {
  return Math.floor(parseInt(n, 0));
}

function drawConsole(row, column, symbolOne, symbolTwo) {
  symbolOne = symbolOne || '#';
  symbolTwo = symbolTwo || '\\';
  var userString = '';
  for (var i = 0; i < column; i++) {
    for (var j = 0; j < row; j++) {
      j % 2 === i % 2 ? userString += symbolOne : userString += symbolTwo;
    }
    userString += '\n';
  }
  console.log(userString);
}

do {
  var rowS = prompt('Введите число: ', '8');
  var columnS = prompt('Введите число: ', '8');
  var row = myFunc(rowS);
  var column = myFunc(columnS);
} while (isNaN(row) || isNaN(column));

drawConsole(row, column, '#', ' ');
drawConsole(row, column);