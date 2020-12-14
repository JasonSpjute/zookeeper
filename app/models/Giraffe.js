export default class Giraffe {
    constructor(name, gender, weight, neckLength, height){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.necklength = neckLength
        this.height = height
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}