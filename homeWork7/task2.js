// const numbers = [1, 2, 3, 4, 5]
// const newNumbers = numbers.map((x) => x * numbers.indexOf(x));

const numbers = [1, 2, 3, 4, 5]
const newNumbers = numbers.map((num, idx) =>num * idx);


console.log('Array newNumbers:',newNumbers)