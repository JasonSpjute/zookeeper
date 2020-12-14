export default class Yak {
    constructor(name, gender, weight, height, width){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.height = height
        this.width = width
    }
    eat(ant) {
        console.log(`Delicious yummy ${ant}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}