// Week 3 > Exercise: Capture Data
var h1 = document.querySelector('h1')
var arr = ['Example Domain', 'First Click', 'Second Click', 'Third Click']

function handleClicks() {
    switch (h1.innerText){
        case arr[0]:
            h1.innerText = arr[1]
            break
        case arr[1]:
            h1.innerText = arr[2]
            break
        case arr[2]:
            h1.innerText = arr[3]
            break
        default:
            h1.innerText = arr[0]
    }
}

h1.addEventListener('click', handleClicks)


// DOM Manipulation
/*
var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = ''
document.body.appendChild(h1)
document.body.appendChild(input)

input.addEventListener('change', () => {
    console.log(input.value)
})
*/

/*
let bestBoxers = new Map()
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
*/


/*class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {
    constructor() {
        super(4);
    }
}

var result = new Dog();
console.log(result.legs);
*/
let {PI} = Math;
class Animal {

}

class Cat extends Animal {
    constructor() {
    super();
    this.noise = "meow";
    }
}

var result = new Animal();
console.log(result.noise);

/*
var globalVar = 77;

function scopeTest() {
    var localVar = 88;
}

console.log(localVar);

function consoleLog(val) {
    console.log(val)
    return val
}

throw new Error()
console.log("Hello")

function letterFinder (word, match) {
    for (i = 0; i < word.length; i++) {
        if (word[i] === match) {
            console.log("Found the", match, "at", i)
        } else {
            console.log("--- No match found at", i)
        }
    }
}

letterFinder("test", "t")

var clothes = []
clothes.push("Shirt")
clothes.push("Pants")
clothes.push("Shoes")
clothes.push("Watch")
clothes.push("Hat")
console.log(clothes)

clothes.pop()
console.log(clothes)

clothes.push("Jogger")
console.log(clothes[2])

var favCar = {}
favCar.color = "Orange"
favCar.convertible = false
console.log(favCar)

function addTwoNums (a, b) {
    console.log(a + b)
}

function addTwoNums (a, b) {
    try {
        if (typeof(a) !== 'number') {
            throw new ReferenceError('The first argument is not a number.')
        } else if (typeof(b) !== 'number') {
            throw new ReferenceError('The second argument is not a number')
        } else {
            console.log(a + b)
        }
    } catch (error) {
        console.log(error)
    }
}

addTwoNums(5, "5")
console.log("It still works")

function letterFinder(word, match) {
    var condition1 = typeof(word) === "string" && word.length >= 2
    var condition2 = typeof(match) === "string" && match.length === 1

    if (condition1 && condition2) {
        for(i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function.")
    }
}

letterFinder(1, 2)
letterFinder("cat", "c")

var result = null
console.log(result)

var x;

var x;

if(x === null) {
  console.log("null");
} else if(x === undefined) {
  console.log("undefined");
} else {
  console.log("ok");
}
*/
