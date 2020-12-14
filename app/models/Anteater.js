export default class Anteater {
    constructor(name, gender, weight, snoutLength, antsPerHour){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.snoutLength = snoutLength
        this.antsPerHour = antsPerHour
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}
