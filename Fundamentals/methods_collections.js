/**
 * ARRAYS
 */

let videoJuegos = ["Mario 3", "Call of Duty", "Star Wars", "DBS"]
console.log(videoJuegos.length) // => 4

let components = ["layout", "about-us", "history", "contact"]
components.forEach((elem, idx) => {
  console.log(elem, idx) // => layout 0 ...
})

let colors = ["red", "orange", "purple", "brown"]
colors.push("yellow")
console.log(colors) // => ['red, 'orange', 'purple', 'brown', 'yellow']

let movies = ["avengers", "thor", "black widow"]
movies.pop()
console.log(movies) // => ['avengers', 'thor']

let wheater = ["hot", "cold", "rain", "freeze"]
wheater.shift()
console.log(wheater) // => ['cold', 'rain', 'freeze']

let genres = ["male", "female", "undefined"]
genres.unshift("bisexual")
console.log(genres) // => ['bisexual', 'male', 'female', 'undefined']

let songs = ["thriller", "happy", "uptdown"]
console.log(songs.indexOf("happy")) // => 1

let fruits = ["banana", "strawberry", "orange", "watermelon"]
let fruitsRemoved = fruits.splice(2, 1)
console.log(fruits, fruitsRemoved) // => ['banana', 'strawberry', 'watermelon'] ['orange']

let ages = [12, 43, 25, 33, 11]
let agesCopy = ages.slice()
console.log(ages, agesCopy) // => [12, 43, 25, 33, 11] [12, 43, 25, 33, 11]

let names = ["Mary", "George", , , , "Susan", "Betiana", "Milagros", , , ,]
console.log(names) // => ['Mary', 'George', <3 empty items>, 'Susan', 'Betiana', 'Milagros', <3 empty items>]
console.log(names.length) // => 11
console.log(Object.keys(names)) // => ['0', '1', '5', '6', '7']
console.log(names[1]) // => George
console.log(names[2]) // => undefined

let text = "HelloWorld"
console.log(Array.from(text)) // => ['H', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
console.log(Array.from([1, 2, 3, 4, 5], (x) => x + x)) // => [2, 4, 6, 8, 10]
console.log(Array.from({ length: 3, 0: "a", 1: "b", 2: "c" })) // => [ 'a', 'b', 'c' ]

let listCharacters = ["a", "b", "d"]
console.log(Array.isArray(listCharacters)) // => true

let listThreeVowels = ["a", "e", "i"]
let listTwoVowels = ["o", "u"]
console.log(listThreeVowels.concat(listTwoVowels)) // => ['a', 'e', 'i', 'o', 'u']

let geometric_figures = ["square", "triangle", "circle", "oval"]
geometric_figures.copyWithin(0, 2)
console.log(geometric_figures) // => ['circle', 'oval', 'circle', 'oval']
geometric_figures.copyWithin(-1)
console.log(geometric_figures) // => ['circle', 'oval', 'circle', 'circle']

let editors = ["sublime-text", "visual-code", "brackets", "codepen"]
for (let [idx, elem] of editors.entries()) {
  console.log(idx, elem) // => 0 sublime-text
} //    1 visual-code
//    2 brackets
//    3 codepen

let majorTo18 = [29, 19, 20, 33, 21]
let anyIsMajor = majorTo18.every((currentValue) => currentValue > 18)
console.log(anyIsMajor) // => true

let arr1 = new Array(5)
arr1.fill(9)
console.log(arr1) // => [9, 9, 9, 9, 9]

let business = ["electrodomestics", "electronics", "foods", "assisstants", "foods"]
let wordsMinorToSix = business.filter((currentValue) => currentValue.length < 6)
console.log(wordsMinorToSix) // => ['foods', 'foods']

let prices = [150, 204, 409, 439]
let findPriceGreaterThan400 = prices.find((value) => value > 400)
console.log(findPriceGreaterThan400) // => 409

let subject = ["maths", "physics", "music", "lenguages", "logic"]
let findIndexOfLengthIsGreaterThan7 = subject.findIndex((value) => value.length > 7)
console.log(findIndexOfLengthIsGreaterThan7) // => 3

let resolutions = ["1080x920", "2060x1080", "920x480", "480x360"]
resolutions.forEach((elem) => {
  console.log(elem) // => 1080x920
}) // => 2060x1080
// => 920x480
// => 480x360

let albumCategories = ["family", "graduation", "personal", "pets", "friends"]
let existsPet = albumCategories.includes("pet")
console.log(existsPet) // => false

let phrase3 = "hot music is now a new hot station and its director is Carlyn hot"
let whereIsHotFrom19 = phrase3.indexOf("hot", 19)
console.log(whereIsHotFrom19) // => 23

let occupation = ["engineer", "singer", "musician", "layer", "fligh attendant", "pilot", "doctor"]
console.log(occupation.join()) // => engineer,singer,musician,layer,fligh attendant,pilot,doctor
console.log(occupation.join("-")) // => engineer-singer-musician-layer-fligh attendant-pilot-doctor
console.log(occupation.join(", ")) // => engineer, singer, musician, layer, fligh attendant, pilot, doctor

let countries = ["Germany", "China", "Russia", "Italy", "Japan"]
for (key of countries.keys()) {
  console.log(key) // 0
} // 1
// 2
// 3
// 4

let quantities = [2, 53, 2, 5, 4, 2, 56, 2, 5]
let lastPositionOfTwo = quantities.lastIndexOf(2)
console.log(lastPositionOfTwo) // => 7

let multiplyByTwo = [2, 4, 6, 12]
let multiplyOperation = multiplyByTwo.map((x) => x * 2)
console.log(multiplyOperation) // => [4, 8, 12, 24]

let costs = [2, 5, 3]
console.log(costs.reduce((acum, elem) => acum + elem)) // => 10
console.log(costs.reduce((acum, elem) => acum - elem)) // => -6
console.log(costs.reduce((acum, elem) => acum * elem)) // => 30

let clothes = ["t-shirt", "pants", "shoes", "socks"]
let reverseArray = clothes.reverse()
console.log(reverseArray) // => ['socks', 'shoes', 'pants', 't-shirt']

let grades = ["first", "second", "thrid", "fourth", "fifth"]
let areSomeWordsWithRKeyword = grades.some((elem) => elem.includes("r"))
console.log(areSomeWordsWithRKeyword) // => true

let namesMale = ["Miles", "Patrick", "Andy", "George"]
console.log(namesMale.sort()) // => ['Andy', 'George', 'Miles', 'Patrick']
let numTickets = [003, 002, 121, 123, 001]
console.log(numTickets.sort()) // => [1, 121, 123, 2, 3]
console.log(numTickets.sort((a, b) => a - b)) // => [1, 2, 3, 121, 123]

let phraseWilliam = ["Hope", "is", "more", "important"]
console.log(phraseWilliam.toString()) // => Hope,is,more,important

let califications = [12, 94, 100, 92, 38, 59, 85]
let iterator = califications.values()
for (const elem of iterator) {
  console.log(elem) // 12
} // 94
// 100
// 92
// 38
// 59
// 85

const arr2 = [1, "ass", false, {}]
const spreadOperatorArr = [...arr2]
console.log(spreadOperatorArr) // => [1, 'ass', false, {}]

const arr3 = [null, null, {}]
console.log(arr3.some((x) => x)) // => true
