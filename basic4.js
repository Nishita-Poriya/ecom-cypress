//var evenscores=[]
var fruits=["banana","mango","apple"]

console.log(fruits) 
console.log("sort string",fruits.sort())
console.log("reverse string",fruits.reverse())


var scores1=[12,003,25,16,19]
//console.log(scores1.sort())

console.log(scores1.sort())
scores1.sort(function(a,b)
{
    console.log(scores1)
    console.log(a,b)
    return a-b
})

console.log(scores1.sort((a,b)=>a-b))

console.log(scores1.reverse())
scores1.reverse(function(a,b)
{
    console.log("scores1=",scores1)
    console.log(b-a)
    return b-a
})

console.log(scores1.sort((a,b)=>b-a))