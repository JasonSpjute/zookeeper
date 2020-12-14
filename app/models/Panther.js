export default class Panther {
    constructor(name, gender, weight, length, humanKillCount){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.length = length
        this.humanKillCount = humanKillCount
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}