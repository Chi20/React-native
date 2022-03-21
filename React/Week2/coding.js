const { kStringMaxLength } = require('buffer')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  // const encode = string => {x+1}


readline.question(`please type in a string you want to encode:   `, str => {

var obj = {};
for (var n of str) {
  
  if (obj[n]===obj[n+1]) 
  { if(obj[n]) {

        obj[n]++;
    } else {
        obj[n] = 1;
    }
  }else console.log(obj[n]+n)}
  

  
  readline.close()
})

// for(let i=0;i < str.length ; i += 1){
//   if()
// }