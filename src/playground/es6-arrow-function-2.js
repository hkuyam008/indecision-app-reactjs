// arguments object - no longer bound

const add = (a,b) => {
    //console.log(arguments)
    return a + b;
};

console.log(add(55,1, 1000))

// this keyword - no longer bound

const user = {
    name: 'Mayukh',
    cities: ['San Diego', 'Denver', 'Kolkata'],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}`)
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())