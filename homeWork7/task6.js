const numbersList = [1,10,14,2,4,5,43,34]
const newNumberslist = structuredClone(numbersList)
newNumberslist.sort((a, b) => a-b)

console.log('numbersList: ', numbersList)
console.log('newNumberslist:', newNumberslist)
