export default class Elephant {
    constructor(name, gender, weight, trunkLength, shoeSize){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.trunkLength = trunkLength
        this.shoeSize = shoeSize
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}