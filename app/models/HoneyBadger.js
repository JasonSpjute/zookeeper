export default class HoneyBadger {
    constructor(name, gender, weight, length, height){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.length = length
        this.height = height
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}