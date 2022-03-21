function foo(){
    console.log("hello")
}

foo();

(function(){
    console.log("hello from annonymous ES5 function!")
})();

(() =>{
    console.log("hello from annoymous ES6 function!")
})

const bar = () => {
    console.log("hello from" + bar)
}
bar();

const add2Print = (a,b) =>{
    // console.log( a + b)
}
add2Print(1,2)

const add2Returning  = (a,b) => {
    return a+b
}
console.log(add2Returning(2,3))

const add2Concise = (a,b) => a + b
console.log(add2Concise(3,4))

const incr = x => x+1
console.log(incr(10))

const addAmounts = (start, stop ,adder) => {
    for( let i = start;i < stop ; i += 1){
        console.log(adder(i))
    }
}
addAmounts(0 , 10, incr)

// const makeDecr = {delta} =>
//     n => n - delta;

// const decr1 = makeDecr(1)
// console.log(decr1(2))