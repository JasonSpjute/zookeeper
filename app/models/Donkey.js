export default class Donkey {
    constructor(name, gender, weight, height){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.height = height
    
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}