export default class JackRabbit {
    constructor(name, gender, weight, earLength, hopHeight){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.earLength = earLength
        this.hopHeight = hopHeight
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}