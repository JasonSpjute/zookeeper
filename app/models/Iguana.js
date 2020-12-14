export default class Iguana {
    constructor(name, gender, weight, tailLength, totalLength){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.tailLength = tailLength
        this.totalLength = totalLength
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}