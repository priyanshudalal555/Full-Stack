const mcu =['Thor','Spider Man']
const dcu =['Batman','Super Man']

let heropower={
    thor: 'Hammer',
    spiderman: 'Sling',

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this}`)
    }
}

//Maing Prototype
const TeachingSupport = {
    isAvilable: false
}

const Assignments = {
    fullTime: true,
    __proto__: TeachingSupport
}

//Other way of prototype
// TeachingSupport.__proto__ = Assignments

//Modern way of prototype
Object.setPrototypeOf(TeachingSupport, Assignments)