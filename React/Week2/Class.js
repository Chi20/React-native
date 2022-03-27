class Mygreeter extends Greeter{
    constructor(gretting){
        super(greeting);
        this.greeting = greeting;
    }
    greet(name){ console.log(`${greeting}.${name}!`);}
}