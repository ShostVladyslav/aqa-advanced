const users = [
    {name:'Bob', email: 'Bob@mainModule.com', age:'22'},
    {name:'Will', email: 'will@mainModule.com', age:'31'},
    {name:'Jack', email: 'jack@mainModule.com', age:'25'}
]
for (const {name, email, age} of users){
    console.log(`${name} is ${age} years old and his email is ${email}`)
}