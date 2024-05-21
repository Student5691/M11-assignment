//STEP 1
let month = prompt('For which month would you like to know its total number of days? (first three letters or whole name): ')
let year = prompt('And for which year? (yyyy): ')
let monthNum
let mo
while (true) {
    if (month.toLowerCase() === 'january' || month.toLowerCase() === 'jan') {
        monthNum = 0
        mo = 'January'
        break
    } else if (month.toLowerCase() === 'february' || month.toLowerCase() === 'feb') {
        monthNum = 1
        mo = 'February'
        break
    } else if (month.toLowerCase() === 'march' || month.toLowerCase() === 'mar') {
        monthNum = 2
        mo = 'March'
        break
    } else if (month.toLowerCase() === 'april' || month.toLowerCase() === 'apr') {
        monthNum = 3
        mo = 'April'
        break
    } else if (month.toLowerCase() === 'may') {
        monthNum = 4
        mo = 'May'
        break
    } else if (month.toLowerCase() === 'june' || month.toLowerCase() === 'jun') {
        monthNum = 5
        mo = 'June'
        break
    } else if (month.toLowerCase() === 'july' || month.toLowerCase() === 'jul') {
        monthNum = 6
        mo = 'July'
        break
    } else if (month.toLowerCase() === 'august' || month.toLowerCase() === 'aug') {
        monthNum = 7
        mo = 'August'
        break
    } else if (month.toLowerCase() === 'september' || month.toLowerCase() === 'sep' || month.toLowerCase() === 'sept') {
        monthNum = 8
        mo = 'September'
        break
    } else if (month.toLowerCase() === 'october' || month.toLowerCase() === 'oct') {
        monthNum = 9
        mo = 'October'
        break
    } else if (month.toLowerCase() === 'november' || month.toLowerCase() === 'nov') {
        monthNum = 10
        mo = 'November'
        break
    } else if (month.toLowerCase() === 'december' || month.toLowerCase() === 'dec') {
        monthNum = 11
        mo = 'December'
        break
    } else {
        alert('Invalid entry, try again')
    }
}
d = new Date(year, monthNum+1, 0)
console.log('There are ' + d.getDate() + ' days in ' + mo + ' of ' + year + '.')

//STEP 2
// let userDate = prompt('Enter a date using this format - (dd/mm/yyyy): ')
// let dateInfo = userDate.split('/')
// // d = new Date(dateInfo[2], dateInfo[1]-1, dateInfo[0])
// // dateList = d.toDateString().split(' ')
// // console.log(dateList[1])
// months = ['January','February','March','April','May','June','July','August','September','October','November','December']
// console.log(months[dateInfo[1]-1])

//STEP 3
// let userDate = prompt('Enter a date using this format - (dd/mm/yyyy): ')
// let dateInfo = userDate.split('/')
// d = new Date(dateInfo[2], dateInfo[1]-1, dateInfo[0])
// if (d.getDay() == 0) {
//     console.log(userDate + ' is a Sunday.')
// } else if (d.getDay() == 6) {
//     console.log(userDate + ' is a Saturday.')
// } else {
//     console.log(userDate + ' is a weekday.')
// }

//STEP 4
// let today = new Date()
// let yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate()-1)
// let day = yesterday.getDay()
// let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// console.log(days[day])

//STEP 5
// let today = new Date()
// let day = today.getDay()
// let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// console.log(days[day][0])