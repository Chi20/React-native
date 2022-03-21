const empty1={}

const empty2 = Object.create({})

const person = {
    name :'bob smith',
    age:32,
    gender:'male',
    bio(){
        return`${this.name} is ${this.age} years old`
    },
    greet(){
        return `Hi! I'm ${this.name}`
    },
}

console.log(person)

console.log(person.name)
console.log(person.bio())

person.weight=80
console.log(person)

person['hobbies and interests']='skiing, running, chess'
console.log(person['hobbies and interests'])

delete person.age
console.log(person)

for(let key in person){
    if(typeof person[key]=== 'function'){
        continue
    }
    console.log(`person[${key}] = '${person[key]}' (which is of type ${typeof person[key]})`)
}

function foo() {}

foo.customProp = "my new prop"
for(let key in foo){
    console.log(`foo[${key}] = '${foo[key]}' (which is of type ${typeof foo[key]})`)
}

const o1 = { prop1:"val1"}
const copy1 = Object.assign({}, o1)

console.log(copy1)

const o2 = { prop2:"val2"}
const o3 = { prop3:"val3"}
const o4 = Object.assign(o1, o2, o3, person)

console.log(o4)