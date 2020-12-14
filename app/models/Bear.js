export default class Bear {
    constructor(name, gender, weight, species, clawLength, humanKillCount){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.species = species
        this.clawLength = clawLength
        this.humanKillCount = humanKillCount

    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}