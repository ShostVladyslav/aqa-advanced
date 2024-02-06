function divide(numerator, denominator){
    if( denominator === 0){
        throw new Error ('Division by zero is prohibited')
    }
    else if ( typeof numerator !== "number" || typeof denominator != 'number'){
        throw new Error ('A non-numeric value was entered')
    }
    return numerator / denominator
}

try {
    console.log('#1 The value of the division function :', divide(10, 2)); 
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

console.log('---------------------------')

try {
    console.log('#2 The value of the division function :',divide(5, 'number')); 
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}

console.log('---------------------------')

try {
    console.log('#3 The value of the division function :',divide(10, 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Робота завершена");
}