export default class Ostrich {
    constructor(name, gender, weight, wingSpan, neckLength){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.wingSpan = wingSpan
        this.neckLength = neckLength
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}