// option 1
function checkAdult1(age) {
    const adult = age >=18
    return adult
   }
   console.log('Adult:', checkAdult1(25))
   console.log('Adult:', checkAdult1(15))

// option 2
function checkAdult2(age) {
    return age >= 18 ? true : false
   }
   console.log('Adult:', checkAdult2(25))
   console.log('Adult:', checkAdult2(15))

// option 3
function checkAdult3(age) {
    if(age >=18){
        return true
    }
    else{
        return false
   }
   }   
   console.log('Adult:', checkAdult3(25))
   console.log('Adult:', checkAdult3(15))