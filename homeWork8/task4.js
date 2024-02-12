const person = {
    firstName: 'Bob',
    lastName: 'Wilson',
    age: '20'
}
person.email = 'Bob@gmail.com'
delete person.age
console.log(person)