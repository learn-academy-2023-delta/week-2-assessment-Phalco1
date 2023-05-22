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

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// // b) Create the function that makes the test pass.

// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// // a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// // b) Create the function that makes the test pass.

// // Pseudo code:

// //  1.) Write a describe statement to take in the argument of a string and function.

// // 2.) Write an it statement in the describe block as a string describing what the test is doing with a function (anonymous function)

// // 3.) Write 3 expect statement to take in the each encased function call with the .toEqual() method with the strings encased in the .toEqual method.

// // 4.) Create a function with a conditional statement 

// // 1.) CREATE

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
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code: 

// array = randomNouns1

// const arrayWords = (array) => {
    
// }

// console.log(arrayWords(randomNouns1).join(" ").toUpperCase)
// console.log(arrayWords(randomNouns2).join(" ").toUpperCase)

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
