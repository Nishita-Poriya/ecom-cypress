var marks=Array (6) 
var marks = new Array(20,40,35,12,37,100)

var marks = [20,40,35,12,37,100]
console.log(marks[2])
marks[3]=14
console.log(marks)//20,40,35,12,37,100)
//console.log("Length of array is")
console.log(marks.length)//6

//methods in array
console.log("add value use push in array")
marks.push(65)
console.log(marks)//add the value in array

console.log("remove value use pop in array")
marks.pop(35)//remove the value from array
console.log(marks)

console.log("first position add value use unshift in array")
marks.unshift(12)
console.log(marks)

console.log("index of array 100")
console.log(marks.indexOf(100))

// 120 is present in array

console.log("120 is present / not?")
console.log(marks.includes(120))

console.log("slice of 2,5")
console.log(marks.slice(2,5))

console.log("for loop to print array")

var sum=0
for(let i=0;i<marks.length;i++)
{
    //console.log(marks[i])
    sum=sum+marks[i]
    console.log("sum of all the elements in the array")
}
console.log(sum)

//reduce filter map > JS functions
//console.log(marks.reduce((sum,mark)=> sum+mark,0))
let total=marks.reduce((sum,mark)=> sum+mark,0)
console.log(total)

/*console.log(marks.reduce(addition,5))

function addition(acc, mark){
    return acc+mark;
}

(acc, mark)=> acc +mark;
*/


//create new array with even number of scores array
var scores =[12,13,14,16]
var evenscores=[]

for(let i=0;i<=scores.length;i++)
{
    if(scores[i]%2==0)
    {
        evenscores.push(scores[i])
    }
}
console.log("scores value =",evenscores)

//annonomious  fun using filter
let newFilterEvenscores=scores.filter(scores=>scores%2==0,0)
console.log("newFilterEvenscores",newFilterEvenscores)

//mapping > map one array with other values

let mappedArray=newFilterEvenscores.map(score=>score*3) 
console.log("mapping array with scores =[12,13,14,16]",mappedArray)


//multipley with 3 and sum them 

let totalval=mappedArray.reduce((sum,val)=>sum+val,0)
console.log("totalval=array*3+sum",totalval)

let sumvalues=scores.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log("score%2=0, mapping of score *3,  resuce 'sum+val' ",sumvalues)

let fruits=["apple","banana","mango"]
fruits.sort()
console.log(fruits)