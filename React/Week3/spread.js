const o1 = {fruit1:"apple"}
// console.log (Object.assign({},o1))

const o2 = {fruit2:"pear"}
const o3 = Object.assign({},o1,o2)
console.log(o3)

const o4 = {...o1, ...o2 }
console.log(o4)

const o5 = {...o4,fruit3:"watermelon"}
const o6= {...o5,fruit3:"banana"}

const a1=[1,2,3]
const a2 = [0, ...a1]
const a3=  [...a2,4]
const a4 =[6,7,8]
const a5 = [...a3, ...a4]
console.log(a5)

const a6 = [...a5.slice(0,5),5,...a5.slice(5)]

console.log(a6)
const foo = (...args) => {
    for (let item of args){
        console.log(item)
    }
}
foo(1, 2, 3)
foo(...[4,5,6])