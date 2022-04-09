const Plant = function(title) {
    this.title =title

}
Plant.prototype.setColor = function(color) {
    this.color = color
}
Plant.prototype.toString = function(){
    return `This ${this.title} has the color ${this.color}`
}

const flower = new Plant("Rose")
flower.setColor ("Red")

class Animal {
    constructor(title){
        this.title = title
    }
    setColor(color){
        this.color = color
    }
    toString(){
        return `This ${this.title} has the color ${this.color}`
    }
}
const cat  = new Animal("Cat")
cat.setColor("White")
console.log(cat.toString)
console.log(cat.toString())

class Mammal extends Animal{
    constructor(title){
        super("furry " +title)
    }
    toString(){
        return `This ${this.title} is a mammal`
    }
}
const dog = new Mammal("Dog")
dog.toString()

class BetterDate extends Date{
    constructor(){
        super()
    }
    getDateFormat(){
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','OCt','Nov','Dec']
        return `${this.getFullYear()} - ${months[this.getMonth()]} - ${this.getDate()} `
    }
}
console.log(new BetterDate().getDateFormat())

class Shape2D{
    static descriptor(){
        return `A ${this.name} is an object in 2-dimensional plane`
    }
}
console.log(Shape2D.descriptor())//no instance