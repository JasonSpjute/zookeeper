export default class Fox {
    constructor(name, gender, weight, color, tailLength){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.color = color
        this.tailLength = tailLength
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}