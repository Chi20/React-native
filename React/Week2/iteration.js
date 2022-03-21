let x = 10
while (x>0) {
    // console.log('x=${x}')
    // console.log('x='+x)
    x -= 1
}

let n = 0
do{
    n += 1
    //console.log("n=${n}")
    
}while(n < 10)

let m = 10
while (m > 0){
    console.log(`m = ${m}`)
    if(m===5)
        break
    m-=1
}

let l = 10
while(l > 0 ){
    console.log(`l = ${l}`)
    if(l === 6){
        l  -= 2
        continue
    }
    l -= 1
}

for (let i = 0; i< 10; i+=1){
    console.log(`i = ${i}`)
}