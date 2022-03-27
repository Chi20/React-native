
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
const Reccode= string =>{
    
   str= string.replace(" ","").replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*||\-|\_|\+|\=|\||\\||\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"").toLowerCase();
   console.log(str)
    var c,r;

    length = str.length
    c = Math.ceil(Math.sqrt(length))
    if(c*(c-1)>=length) r = c-1
    else r = c
    var a=[];
    for(let i=0;i<r;i++){
        a[i]=[];
        for(let j=0;j<c;j++){
            a[i][j]=" ";
    }
    }
    console.log(a)
    normal=[]
    console.log("The normalization rectangle:")
    for(var i=0;i<r;i++)
    {
        for(var j=0;j<c;j++){
            if(c==r){
                a[i][j]=str[i*r+j];
                if(str[i*(r+1)+j]==undefined)
                a[i][j]= ' '
                normal+=a[i][j]
            }
            else{
                a[i][j]=str[i*(r+1)+j];
                if(str[i*(r+1)+j]==undefined)
                a[i][j]= ' '
            normal+=a[i][j]
            }
        }
    // normal.replace(undefined," ")
    normal+="\n";

    }
    console.log(normal);
    console.log();
    console.log("The Recoded rectangle:")
    str = []
    for(j=0;j<c;j++)
        {
            for(i=0;i<r;i++){
                str+=a[i][j]
            }
            str+= "\n"
        }
return str
}
readline.question(`please type in a string to recode:`, string => {
string="Deal with the faults of others as gently as your own."

console.log(`${Reccode(string)}`)
readline.close()
})