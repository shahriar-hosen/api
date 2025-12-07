const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        return this.firstName + ' ' + this.lastName
    },
    netSalary: function (amount = 0, healthInsurance = 0) {
        this.salary = this.salary - amount - healthInsurance
        return this.salary
    }
}
normalPerson.netSalary(500)
normalPerson.netSalary(500)
console.log(normalPerson.salary)
const fullName = normalPerson.getFullName()
console.log(fullName)

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alam',
    salary: 25000,
}
// Using bind to borrow method from another object that creates a new function and need to call to execute
const heroPersonNetSalary = normalPerson.netSalary.bind(heroPerson)
heroPersonNetSalary(500)
heroPersonNetSalary(500)
console.log(heroPerson.salary)
// Using call to borrow method from another object that doesn't create a new function and execute immedeately
normalPerson.netSalary.call(heroPerson, 1000, 1000)
normalPerson.netSalary.call(heroPerson, 1000, 500)
console.log(heroPerson.salary)

normalPerson.netSalary.apply(heroPerson, [500, 500] )
console.log(heroPerson.salary)