export default class Lion {
    constructor(name, gender, weight, toothLength, humanKillCount){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.toothLength = toothLength
        this.humanKillCount = humanKillCount
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}