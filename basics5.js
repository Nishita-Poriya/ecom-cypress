//var scope is global /function level
//let global level/block level{}

const great ="evening "
//great="night"
//global level variable can get execute
console.log(great)
if(1==1)
{

    let great="afternoon"
   
    console.log(great)
}
function add(a,b)
{
    let great="morning"
   return a+b
}

let sum = add(2,3)
console.log("sum=",sum)
console.log(great)

//
console.log("anyonomous fun now")

var sumofinteger=function(c,d)
{
    return c+d
}
let sumofNumber=(c,d)=> c+d
console.log("sumofNumber",sumofNumber(2,3))

