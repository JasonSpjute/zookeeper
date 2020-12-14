export default class Zebra {
    constructor(name, gender, weight, height, blackOrWhiteStripes){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.height = height
        this.blackOrWhiteStripes = blackOrWhiteStripes
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}