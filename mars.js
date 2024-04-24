alert('Starting your Mars Adventure!')
alert('Booting up...')
alert('All systems go!')
alert("Let's start")

// Users will write their names
const username = prompt("Hi there. What's your name?")

// Explanation of the Game
alert(`Hello, ${username}! Welcome to the Mars Adventure.`)
alert(`Congrats! You have been chosen to be transfer to Mars`)

let excited = prompt("Are you excited? type Y or N")

if(excited === `Y`) {
    alert("I knew you'd say that. It's so cool that you're going to Mars")
} else {
    alert("Well, it's too late to back out now.")
}
excited = excited.toUpperCase()

alert("It's time to pack for your trip to Mars.")
let numSuitcases = prompt("How many suitcases do you plan to bring?")

numSuitcases = Number(numSuitcases)

if (numSuitcases > 2) {
    alert("That's way too many.You'll have to pack more lightly.")
} else {
    alert("Perfect. You'll certainly fit in the spaceship!")
}

alert("You're allowed to bring one companion animal with you.")

const companionType = prompt("What kind of companion animal would you like to bring?")
let companionName = prompt("What is your companion's name?")

let firstLetter = companionName[0]
firstLetter = firstLetter.toUpperCase()

let otherLetters = companionName.slice(1)
otherLetters = otherLetters.toLowerCase()
  
companionName = firstLetter + otherLetters

// Confirm animal and its name
alert(`Cool, so you're bringing ${companionName} the ${companionType}.`)

alert('NASA has a interior design team offering to outfit your space ship.')
let decorChoice = prompt(`You have a couple of options for the interior decor of your ship. Your options are:
 A Minimalist Design 
 B Vintage Finds 
 C Cozy corner`
)
// making that every text input could be acepted weather is upper case or lower case
decorChoice = decorChoice.toUpperCase()

let decor
if (decorChoice === 'A') {
    decor = 'minimalist design'
} else if (decorChoice === 'B') {
    decor = 'vintage finds'
} else if (decorChoice === 'C') {
    decor = 'cozy corner'
}

alert(`${username} and ${companionName} , surfing the celestial abyss, in a ${decor} spaceship`)

let timer = 5
while (timer > 0) {
    alert(`${timer}...`)
  timer -= 1
}
alert('*** LIFTOFF ***')
  











