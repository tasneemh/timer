/*
Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
*/

const arguments = process.argv;
//console.log(arguments);
const arr = arguments.slice(2);
const arr2 = arr.sort((a, b) => {
  a - b;
});

for (let i = 0; i < arr2.length; i++) {
  if (arr2.length === 0) {
    return "";
  } else {
    if (arr2[i] > 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, arr2[i] * 1000);
    }
  }
}
