/*function findFifty(num1,num2) {
    let a = num1 
    let b = num2
    if (a + b === 50 || a && b === 50) {
        return true ;
    }

    
}

console.log (findFifty(25,25))*/

function findFifty(num1,num2) {
    let a = num1 
    let b = num2
    
 return (a + b === 50 || a && b === 50) ;
    

    
}

console.log (findFifty(25,20))

//esercizio n2
function removeCaracter(string,position) {
    if (position < 0 || position >= string.length) {

        return string;
    }

    let slicedString = string.slice(0,position) + string.slice(position + 1);
    return slicedString;
    
}
 
console.log (removeCaracter("ciambella",3))


//esercizio n3 

function checkNumber(num1,num2) {
function     isInRange(num) {
        return (num >= 40 && num <= 60) || (num >= 70 && num <= 100)
     }

     return isInRange(num1) && isInRange(num2)

    


    
}

/*console.log (checkNumber(6,70))
console.log (checkNumber(40,70))
console.log (checkNumber(80,100))
console.log (checkNumber(70,40))*/


//esercizio n4

function bigCity(cityName) {
    if (cityName.startsWith("Los") || cityName.startsWith("New")) {
        return cityName ;
    }

    return false
}

console.log(bigCity("Losgamberos"))