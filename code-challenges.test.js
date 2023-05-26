// // ASSESSMENT 2: Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// // Pseudo code:

// // a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// // b) Create the function that makes the test pass.

// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// // a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

// // // b) Create the function that makes the test pass.

// // // Pseudo code:

// // //  1.) Write a describe statement to take in the argument of a string and function.

// // // 2.) Write an it statement in the describe block as a string describing what the test is doing with a function (anonymous function)

// // // 3.) Write 3 expect statement to take in the each encased function call with the .toEqual() method with the strings encased in the .toEqual method.

// // // 4.) Create a function with a conditional statement if the object is divisible by 3 then itll return that number is divisible by 3. if else, itll return the number is not divisible by 3.

// // // 1.) CREATE

describe("divideBy3", () => {
    it("decides if the number inside is divisible by 3.", () => {
        expect(divideBy3(object1.number)).toEqual("15 is divisible by three")
        expect(divideBy3(object2.number)).toEqual("0 is divisible by three")
        expect(divideBy3(object3.number)).toEqual("-7 is not divisible by three")
    })
})

const divideBy3 = (object) => {
    if (object % 3 === 0) {
    return `${object} is divisible by three`
    } else {
    return `${object} is not divisible by three`
    }
}



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// // b) Create the function that makes the test pass.

// // Pseudo code: 

//  1.) Write a function that take in the array and add the map HOF to iterate in the array. 

//  2.) In the map HOF write a function that takes the value you are iterating and split the strings into individual strings of letters.

//  3.) add another map HOF to iterate each individual letter and add a conditional statement to return the 0 index in the string uppercased and the rest of the string as is. 

//  4.) Add the .join('') with single quotations to join the string "letters" back to string "words".


const arrayWords = (array) => {
    return array.map(value => value.split('').map((value, index) => { 
        if (index == 0)
        return value.toUpperCase()
        else {
            return value
        }
    }).join(''))     
}

console.log(arrayWords(randomNouns1))

describe("arrayWords", () => {
    it("Capitalize the first letter in the string", () => {
        expect(arrayWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(arrayWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.


// Pseudo code:

// 1.) Write a function that will iterate over the strings its index. Set the parameter, used the word "string" as a placeholder.

// 2.) In the block of code you want the iteration to read the index, and if it identifies a vowel in the word, it will stop the iteration. 
//     Im going to use a for loop to make this iteration to go through the string and identify the values that i set in the array(vowels)

// 3.) Create a conditional "if" statement that states: if any values in the array are identified, the .includes() method will return the value that is true(vowels).

// 4.) Return the index as is, which will be the index where the value(vowels) in the array is identified.


const vowels =["a", "e", "i", "o", "u"]

const firstVowel = (string) => {
    let theVowel = []
    for (let i = 0; i < string.length; i++) {
      if  (vowels.includes(string[i])) {
        return i
         }
    }
    return -1
     };
 
 console.log(firstVowel(vowelTester1))
 console.log(firstVowel(vowelTester2))
 console.log(firstVowel(vowelTester3))
 
 