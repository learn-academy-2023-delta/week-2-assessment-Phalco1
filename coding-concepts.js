// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Delta 2023"
// console.log(cohort.split(""))

// a) Your answer: "D", "e", "l", "t", "a", "2", "0", "2", "3"
// b) Verify and explain: the split built in method with double quotes, no space, breaks down the letters of the string into individual strings.

// --------------------2) What will this log?

const greeter = (name) => {
   `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: You have to add return or the function doesnt know what to use as the output.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer:8, 10, 12, 14, 16
// b) Verify and explain: the function takes in the array and apply the .map() function. the map function iterates to all elements and multiply by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: 11, 13, 15
// b) Verify and explain: the code has an array with the .filter() HOF and takes the value and seeing if it doesnt equal to numbers with a zero remainder. If it has a zero remainder then it filters out of the array. If it has a remainder, then it stays in the array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript", "React", "PostgreSQL", "GitHub"
// b) Verify and explain: I didnt read it in its entirty, so yes in the language arrray "JavaScript" is in the 0 index.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Delta"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// b) Verify and explain:
