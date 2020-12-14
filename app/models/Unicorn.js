export default class Unicorn {
    constructor(name, gender, weight, hornLength, humanKillCount){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.hornLength = hornLength
        this.humanKillCount = humanKillCount
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}