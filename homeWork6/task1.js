function handleNum (num, handleEven, handleOdd){
    if (num %2 ==0){
    handleEven()}
    else {handleOdd()}
        return num
} 

function handleEven() {
    console.log('number is even')
}
function handleOdd() {
    console.log('number is odd')
}

handleNum (5, handleEven, handleOdd)