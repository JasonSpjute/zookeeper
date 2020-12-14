export default class Cougar {
    constructor(name, gender, weight, toothLength, pantSize){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.toothLength = toothLength
        this.pantSize = pantSize
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}