export default class TRex {
    constructor(name, gender, weight, height, toothLength, humanKillCount){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.height = height
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