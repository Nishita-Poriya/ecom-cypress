let person={
    
    firstname: "Nishita",
    lastname: "Poriya",
    age : 28,

    fullname : function()
    {
       console.log("1",this.firstname+this.lastname) 
    }
}
console.log("2",person.fullname)
console.log(person.firstname)
console.log(person.lastname)        
console.log(person['lastname'])
//change propert or re assign the value to the 
person.firstname="vicky"
console.log("reassign firstname=",person.firstname)

person.gender="male"
console.log("3",person)

delete person.gender
console.log("4",person)

//it will check where the gender propert is exist/deletedd?
console.log('gender' in person)

//print all the values of the javascript 
for(key in person)
{
console.log("5",person[key])
}