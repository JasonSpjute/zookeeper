export default class Squid {
    constructor(name, gender, weight, length, beakLength, humanKillCount){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.length = length
        this.beakLength = beakLength
        this.humanKillCount = humanKillCount
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}