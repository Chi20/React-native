let n =10
const max = 100
if(n<max) {
    console.log('${n')
}

if(n > max) {
    //console.log('${n}' is greater than ${max})
} else {
    //console.log("${n} is not greater than ${max}")
}

const min = 10
if (n < max) {
    console.log('${n} is less than ${max}')
    if(n<min){
        console.log('${n} is less than ${min}')
    } else {
        console.log('${n} is not less than ${min}')
    }
} else {
    console.log('${n} is not less than ${max}')
}

const high = 3.0,middle =2.0,low = 1.0
let m = 2.14

if(m<low ){}
else if(m < middle){

}
else if(m < high){

}else {
    //console.log('${m} is greater than ${high}')
}

let c = '0'
switch(c){
    case '0':
    case '1':
        console.log("${c} is a numeric digit")
        break;
    default:
            // console.log('')
            break
}

