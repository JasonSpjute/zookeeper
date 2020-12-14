export default class Kangaroo {
    constructor(name, gender, weight, height, hopHeight){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.height = height
        this.hopHeight = hopHeight
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}