var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 11,
  'Vasia': 45,
  'Anton': 99
};

function getWinnerName(obj) {
  var tasks = 0;
  var winnerName = '';
  for (var person in obj) {
    if (obj[person] > tasks) {
      tasks = obj[person];
      winnerName = person;
    }
  }
  return winnerName;
}

console.log(getWinnerName(tasksCompleted));