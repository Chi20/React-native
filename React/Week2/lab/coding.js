const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`
  type in 'E':Encoder mode
  type in 'D':Decoder mode
  other :exit
  ==========>  `, c => {
    
    switch(c){
      case 'E':
        readline.question(`please type in a string you want to encode: `, str => {
  
        var obj = {};
        var output = [];
        
        
           for(let i = 0; i < str.length; i++)
           {
              key = str[i];//create key of corresponding letter
              if(obj[key])//query letter
              {
                 if (str[i]===str[i+1]){//isequal with the next
                     obj[key]++;
        
                 }
                 else{
                     obj[key]++;
                     output +=obj[key]
                     output += key
                     obj[key]=0;
                 }
              }
              else
              {
                 obj[key] = 1;
                 if(str[i]!==str[i+1]) {//the letter first appear and check next letter
                  output += key
                 obj[key] = 0;}
              }
           }
           console.log(output)
           
          readline.close()
        })
      case 'D':
        readline.question(`please type in a string you want to decode: `, str => {
          var ary=[]
          for(i = 0; i < str.length; i++){
            var asc1 = str.charCodeAt(i);
            var asc2 = str.charCodeAt(i+1);
            if(((asc1>=65&&asc1<=90)||(asc1>=97&&asc1<=122))&&((asc2>=65&&asc2<=90)||(asc2>=97&&asc2<=122))){
                ary+=str[i];
                ary+=1;
            }
            else{
                ary+=str[i]}
            }
            // console.log(ary)            
            var parts = ary.match(/[0-9]+|[a-zA-z]+/g)
            // console.log(parts)
            for(i = 0; i < parts.length; i++){
              if((i+1)%2==0) {count =Number(parts[i-1])
                while(count--){
                process.stdout.write(parts[i])}}
            
            }
            readline.close()
          })
          break;
      default:
        readline.close()
              break
  }
  
  })
  
// var ary = "WWWWWWWWWWWWBWWWWWWWWWWWWBBB"; 
// var str='12WB12W3B'
