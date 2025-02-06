/*function findFifty(num1,num2) {
    let a = num1 
    let b = num2
    if (a + b === 50 || a && b === 50) {
        return true ;
    }

    
}

console.log (findFifty(25,25))*/

function findFifty(num1, num2) {
    let a = num1
    let b = num2

    return (a + b === 50 || a && b === 50);



}

console.log(findFifty(25, 20))

//esercizio n2
function removeCaracter(string, position) {
    if (position < 0 || position >= string.length) {

        return string;
    }

    let slicedString = string.slice(0, position) + string.slice(position + 1);
    return slicedString;

}

console.log(removeCaracter("ciambella", 3))


//esercizio n3 

function checkNumber(num1, num2) {
    function isInRange(num) {
        return (num >= 40 && num <= 60) || (num >= 70 && num <= 100)
    }

    return isInRange(num1) && isInRange(num2)





}

/*console.log (checkNumber(6,70))
console.log (checkNumber(40,70))
console.log (checkNumber(80,100))
console.log (checkNumber(70,40))*/


//esercizio n4

function LosNewCity(cityName) {
    if (cityName.startsWith("Los") || cityName.startsWith("New")) {
        return cityName;
    }

    return false
}

console.log(LosNewCity("Losgamberos"))


//esercizio n5

function sumElements(baralli) {
    let accumulator = 0;
    for (let num of baralli) {
        accumulator += num;
    }
    return accumulator;
}

console.log(sumElements([1, 2, 3, 4, 4, 5, 6, 7,]))

//esercizio n6

function checkArray(numbers) {
    if (numbers.includes(1) || numbers.includes(3)) {
        return false;
    }
    return true;
}

console.log(checkArray([1, 4, 5, 7, 8, 9]))
console.log(checkArray([, 4, 5, 7, 8, 9,]))

//esercizio n7

function angleType(degrees) {
    if (degrees === 180) {
        return "flat angle";
    }
    else if (degrees === 90) {
        return "right angle"
    }
    else if (degrees > 90 && degrees < 180) {
        return "obtuse angle"
    }
    else if (degrees < 90) {
        return "acute angle"
    }

}

console.log(angleType(90))

//esercizio n8

function createAcronym(phrase) {
    return phrase
        .split(" ")
        .map(word => word[0].toUpperCase())
        .join("");

}

console.log(createAcronym("Lega italiana protezione uccelli"))

//EXTRA

//esercizio n1 

function mostFrequent(string) {
    let charCount = {};
    let maxChar = "";
    let maxCount = 0;

    for (let char of string) {
        charCount[char] = (charCount[char] || 0) + 1;

        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    return {
        //charCount: charCount,
        maxChar: maxChar,
        // maxCount: maxCount
    }
}

console.log(mostFrequent("arrabiata"))

//esercizio n2

//funzione riciclata dal esercizio 1..

function mostFrequent2(string) {
    let charCount = {};
    let maxChar = "";
    let maxCount = 0;

    for (let char of string) {
        charCount[char] = (charCount[char] || 0) + 1;

        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    return {
        charCount: charCount,
        maxChar: maxChar,
        maxCount: maxCount
    }
}




function checkCondition(word1, word2) {
    const res1Strip = word1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
    const res2Strip = word2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')

    const res1 = mostFrequent2(res1Strip)
    const res2 = mostFrequent2(res2Strip)

    console.log(res1.charCount)
    console.log(res2.charCount)

    return JSON.stringify(res1) === JSON.stringify(res2);
}


console.log(checkCondition("ivan", "na*!? .;--vi"))

//esercizio n3

let anagram= ["carenti", "incerta", "espatrio"]

let word = "cartine"


function checkAnagram(arr, str) {
    const result = []

    arr.map(word => checkCondition(str, word) && result.push(word))

    return result
}

console.log(checkAnagram(anagram, word))

//esercizio 4 

function palindrome(string) {
    let newCleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');

    return newCleanString === newCleanString.split("").reverse().join("");
}
console.log(palindrome("ingirumimusnocteetconsumimurigni"))

//esercizio n5

function reverseNumber(num) {
    let reverse = parseInt(num.toString().split("").reverse().join(""));

    return reverse
}

console.log(reverseNumber(123456789))


//esercizio n6 

function drawStaircase(X) {
    for (let i = 1; i <= X; i++) {
        let step = '#'.repeat(i); 
        console.log(step); 
    }
}


drawStaircase(2);
drawStaircase(3);

// esercizio n7


function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("navi"))

//esercizio n8


function sliceArray(array, Y) {
    let result = [];
    for (let i = 0; i < array.length; i += Y) {
        result.push(array.slice(i, i + Y));
    }
    return result;
}


console.log(sliceArray([1, 2, 3, 4, 5, 6,], 2));
console.log(sliceArray([1, 2, 3, 4, 5], 1));


//esercizio n9

function drawPyramid(X) {
    for (let i = 1; i <= X; i++) {
        let spaces = ' '.repeat(X - i);
        let hashes = '#'.repeat(2 * i - 1); 
        console.log(spaces + hashes + spaces); 
    }
}

drawPyramid(15);

//esercizio n10 

function spiralMatrix(N) {
    let matrix = Array.from({ length: N }, () => Array(N).fill(0));
    let left = 0, right = N - 1, top = 0, bottom = N - 1;
    let num = 1;
    
    while (num <= N * N) {
        for (let i = left; i <= right; i++) matrix[top][i] = num++;
        top++;
        
        for (let i = top; i <= bottom; i++) matrix[i][right] = num++;
        right--;
        
        for (let i = right; i >= left; i--) matrix[bottom][i] = num++;
        bottom--;
        
        for (let i = bottom; i >= top; i--) matrix[i][left] = num++;
        left++;
    }
    
    return matrix;
}


console.log(spiralMatrix(2));
console.log(spiralMatrix(3));
console.log(spiralMatrix(15));



