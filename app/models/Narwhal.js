export default class Narwhal {
    constructor(name, gender, weight, hornLenth, totalLength){
        this.name = name
        this.gender = gender
        this.weight = weight
        this.hornLenth = hornLenth
        this.totalLength = totalLength
    }
    eat(food) {
        console.log(`Delicious yummy ${food}.`)
    }
    speak(noise) {
        alert(`The ${this.constructor.name} says ${noise}`)
    }
}