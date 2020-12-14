export default class Xeme {
    constructor(name, gender, weight, wingSpan, favoriteFood){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.wingSpan = wingSpan
        this.favoriteFood = favoriteFood
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}