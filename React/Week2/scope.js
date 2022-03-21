const blevel0 = "Block level-0"
{
    const blevel1 = "Block level-1"
    //console.log(blevel0)
    //cosnole.log(blevel1)
    //console.log(here)//illegal
    const here = " in scope from here but not before"
    //console.log(here)//legal
}
// console.log(here)//illegal
// console.log(blevel1)//no longer available

let max = 10
for(let i = 0;i < max ; i++){
    //console.log(i)
}
//console.log(i)//i is not defined

for(var i = 0; i < max ;i++){
    // console.log(i)
}
// console.log(i)//i = 10