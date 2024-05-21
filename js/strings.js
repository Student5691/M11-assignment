//STEP 1
let userName = prompt('Enter your name: ')
let numOfChars = userName.length
alert('Name length: ' + numOfChars)

//STEP 2
// let userName = prompt('Enter your name: ')
// let numOfChars = userName.length
// let userNum = prompt('Enter a number between 1 and ' + numOfChars)
// alert('The letter in "' + userName + '" corresponding to "' + userNum + '" is "' + userName.charAt(userNum - 1) +'".')

//STEP 3
// let fName = prompt('Enter your first name: ')
// let lName = prompt('Enter your second name: ')
// alert('Your name is: ' + fName.concat(' ').concat(lName))

//STEP 4
// let text = 'The quick brown fox jumps over the lazy dog'
// alert('The index of "fox" in "' + text + '"  is at: ' + text.indexOf('fox'))

//STEP 5
// let text = 'The quick brown fox jumps over the lazy fox'
// alert('The index of the last "fox" in "' + text + '"  is at: ' + text.lastIndexOf('fox'))

//STEP 6
// let text = 'The quick brown fox jumped over the lazy dog'
// let userName = prompt('Enter your full name: ')
// alert(text.replace('the lazy dog', userName))

//STEP 7
// let text = 'The quick brown fox jumps over the lazy dog'
// let searchWord = prompt("Enter a word that you'd like to search for in the saved string (case sensitive): ")
// let regExPat = new RegExp(searchWord)
// let result = text.match(regExPat)
// if (result) {
//     alert('Your entry, "' + searchWord + '" was found ' + result.length + ' time(s).')
// } else if (result === null) {
//     // do nothing
// } else {
//     alert('Your search term, "' + searchWord + '", was not found')
// }

//STEP 8
// let old_string = 'The quick brown fox jumps over the lazy dog'
// let new_string = old_string.substring(31,43)
// alert(new_string.toUpperCase())

//STEP 9
// let text = '         THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          '
// alert(text.trim().toLowerCase())

//STEP 10
// let text = 'the quick brown fox jumps over the lazy dog'
// if (text[0] === text[0].toLowerCase()) {
//     let fixedLetter = text[0].toUpperCase()
//     let newText = fixedLetter.concat(text.slice(1))
//     alert(newText)
// }