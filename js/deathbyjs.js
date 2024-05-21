//STEP 1
function alphabetize(userEntry) {
    let letters =[]
    for (let item in userEntry) {
        letters.push(userEntry[item])
    }
    letters.sort()
    result = ''
    for (let item in letters) {
        result += letters[item]
    }
    return result
}

console.log('Problem 1: ' + alphabetize('webmaster'))

//STEP 2
function capitalizeEachWord(userEntry) {
    words = userEntry.split(' ')
    let capWords = []
    for (let item in words) {
        capWords.push(words[item][0].toUpperCase()+words[item].slice(1))
    }
    return capWords.join(' ')
}

console.log('Problem 2: ' + capitalizeEachWord('the quick brown fox'))

//STEP 3
function vowelCounter(userEntry) {
    let vowels = ['a','e','i','o','u']
    let count = 0
    for (let item in userEntry) {
        if (vowels.includes(userEntry[item])) {
            count++
        }
    }
    return count
}

console.log('Problem 3: ' + vowelCounter('the quick brown fox'))

//STEP 4
function stringIDGenerator(userEntry){
    charPool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'
    let d = new Date()
    let milSec = d.getTime().toString().slice(-userEntry) //works up to userEntry of 13, but the first 4 numbers dont change very often. Perhaps using the last four only would be better.
    let strID = ''
    let randIndex = 0
    
    for (let i = 0; i < userEntry; i++) {
        randIndex = Math.floor(Math.random()*2000*Number(milSec[i]) % 62)
        strID += charPool[randIndex]
    }
    return strID
}

console.log('Problem 4: ' + stringIDGenerator(8))

//STEP 5
function longestWord(userEntry) {
    let longest = ''
    for (let item in userEntry) {
        if (userEntry[item].length > longest.length) {
            longest = userEntry[item]
        }
    }
    return longest
}

console.log('Problem 5: ' + longestWord(["Australia", "Germany", "United States of America"]))