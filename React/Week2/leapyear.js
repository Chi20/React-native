
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
const add2Returning  = (a,b) => {
  return a+b
}
const Isleapyear = year => (year%4==0 && year%100!=0)||(year%400 == 0);
  readline.question(`please type in a year you want to look up:   `, year => {
    console.log(`The answer of leap year is ${Isleapyear(year)}!`)
    readline.close()
  })