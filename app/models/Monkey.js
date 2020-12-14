export default class Monkey {
    constructor(name, gender, weight, tailLength, height){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.tailLength = tailLength
        this.height = height
    }
    eat(ant) {
        console.log(`Delicious yummy ${ant}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}