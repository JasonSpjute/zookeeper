export default class Rhino {
    constructor(name, gender, weight, hornLength, width){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.hornLength = hornLength
        this.width = width
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}