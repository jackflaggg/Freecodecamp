class NumberIsArray extends Array {
    sum () {
        return this.reduce((el, alc) => alc += el, 0)
    }
}

const myArray = new NumberIsArray(2, 2, 3)

console.log(myArray)