const Person = require('./basics8')

let day="Tuesday"
console.log(day)
console.log(day.length)

let subday=day.slice(0,4)
console.log("slice=",subday)
console.log(day[1])

//split : Tue day
let splitday=day.split("s")
console.log("split strings=",splitday)

console.log(splitday[1].length)
console.log("splitday = it will split sting 1=Tus ,show length",splitday[1].trim().length)

/*
let word = "   Hello   ";
let trimmedWord = word.trim();
console.log(trimmedWord); // Output: "Hello"
*/

let date='23'
let nextdate='27'
let diff = parseInt (nextdate) - parseInt(date)
console.log("diff=",diff)
diff.toString()

let newquote= day +" is funday"
console.log(newquote)

let val=newquote.indexOf("day",5)
console.log("index of Tuesday=",val)

//tuesday is funday
let count=0
let value=newquote.indexOf("day")

console.log("newquote=",newquote)
console.log("value=",value)

while(value!==-1)
{
    count++//2
    value=newquote.indexOf("day",value+1)
    console.log("value inside=",value)
}
console.log(count)

let person=new Person("Person class is imported here","Nishita","Poriya")
console.log(person.fullname())
