export default class Quokka {
    constructor(name, gender, weight, favoriteFood, cutenessFactor){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.favoriteFood = favoriteFood
        this.cutenessFactor = cutenessFactor
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}