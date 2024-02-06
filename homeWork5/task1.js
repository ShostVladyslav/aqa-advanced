//function declaration
function calculateAreaRectangle1(width, height) {
    const areaRectangle = width * height
    return areaRectangle
}

console.log('function declaration area Rectangle:', calculateAreaRectangle1(5, 10))

//function expression
const calculateAreaRectangle2 = function (width, height) {
    const areaRectangle = width * height
    return areaRectangle
}

console.log('function expression area Rectangle:', calculateAreaRectangle2(5, 10))

//arrow function expression
const calculateAreaRectangle3 = (width, height) => {
    const areaRectangle = width * height
    return areaRectangle
}
console.log('arrow function expression area Rectangle:', calculateAreaRectangle3(5, 10))    