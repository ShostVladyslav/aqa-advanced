const car1 = {
    brand: 'VW',
    model: 'Passat',
    year: 2019,
};
const car2 = {
    brand: 'VW',
    model: 'Golf',
    owner: 'Bob'
};
const car3 ={
    ...car1, ...car2
};
console.log(car3)