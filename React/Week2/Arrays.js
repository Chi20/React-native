const empty1 = []
const empty2 = new Array()//less often seen

console.log(empty1)

const numbers = [1,2,3,4,5]

console.log(numbers[0])

console.log(numbers.length)

console.log(numbers[numbers.length - 1])

const fruits = ['apple', 'orange', 'banana', 'lemon', 'mongo']
fruits.push('watermelon')

const twoFruits = Fruit.slice(1,3)
console.log(twoFruits)

const copyFruits = fruits.slice()
console.log(fruits === copyFruits)

const arrayEquals = (a1,a2) => {
    if(a1.length !== a2.length) {return false}
    for(let i in a1){
        if(a2[i] !== a1[i]) {return false}
    return true  
    }
}
console.log(arrayEquals(fruits,copyFruits))

fruits.splice(0,1)
console.log(fruits)

fruits.splice(fruits.length-1, 1)
console.log(fruits)

//在位置 2，添加新项目，并删除 1 个项目：

//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 1, "Lemon", "Kiwi");

fruits.forEach( (elem, index) => {
    console.log(`fruits[${index}] = ${elem}`)
})

const hobbies = "skiing, fencing, pingpong, running, badminton".split(", ")
console.log(hobbies)
console.log(hobbies.join(", "))

const vowels = Array.from("aeiou")
console.log(vowels)
console.log(vowels.toString())
