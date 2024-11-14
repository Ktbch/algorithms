
// // AN INTERGER IS CALLED PERFECT IF ALL



// my own dolution
const perfectNubersIntersArray=[]


function factorChecking(index) {

    if(typeof index==='number') {
        const value=(index%index)
        if(value==0) return index
        return null
    }

    const joindedIndex=parseInt(index.join().replace(',',''))

    for(let i=0;i<index.length;i++) {
        const element=parseInt(index[i])
        if(joindedIndex%element!=0) return null
    }

    return joindedIndex
}

function findingPerfectNumbers(index) {
    const result=factorChecking(index)
    if(result) {
        perfectNubersIntersArray.push(result)
    }
    return
}
function changeNumberToStringCreateAnArrayFromIt(index) {
    const stringFyNumber=index.toString()

    if(stringFyNumber[1]) {
        return [stringFyNumber[0],stringFyNumber[1]]
    }

    return index
}


for(let index=1;index<=22;index++) {

    const refinedIndex=changeNumberToStringCreateAnArrayFromIt(index)
    findingPerfectNumbers(refinedIndex)
}

console.log(perfectNubersIntersArray)

// // i have to strings s and t
// // and t is generated from s random arrangement
// // return the letter added at a random positon


// const s='abcde'

// const t=[]


// for(let i=0;i<s.length+1;i--) {
//     const randomIndex=Math.floor(Math.random()*s.length)
//     console.log(i)

// }


// console.log(s.length)
// console.log(t)



// solution found from chatGpt
// Extract Digits of the Number: Convert each number to its individual digits.
// Check Divisibility: For each digit,check if it divides the original number without leaving a remainder.
// Store Valid Numbers: If a number passes the divisibility check for all its digits,add it to the result array.

function findPerfectNumbers(range) {
    const perfectNumbersArray=[];

    for(let num=1;num<=range;num++) {
        let isPerfect=true;
        const digits=num.toString().split('').map(Number);  // Step 1: Extract digits


        for(const digit of digits) {
            // Step 2: Check if digit is zero or if it doesn’t divide the number
            console.log(digit)
            if(digit===0||num%digit!==0) {
                isPerfect=false;
                break;
            }
        }

        if(isPerfect) {
            perfectNumbersArray.push(num);  // Step 3: Add to result if all digits divide
        }
    }

    return perfectNumbersArray;
}

const result=findPerfectNumbers(22);
console.log(result); // Output: Array of "perfect" numbers between 1 and 22
