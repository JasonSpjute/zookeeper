export default class Whale {
    constructor(name, gender, weight, length, speedMilesPerHour){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.length = length
        this.speedMilesPerHour = speedMilesPerHour
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}