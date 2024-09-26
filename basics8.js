//to run this file plz remove comments from let person so it will calling the onbects


module.exports=class Person
{
    age=25

    //properties when you see the "get"
    get location()
    {
        return "Canada"
    }


   // let person=new Person()
   // console.log(person.age)

//constructor is a method which executes by default when you create object of the class

    constructor(firstname,lastname)
    {
        this.firstname=firstname
        this.lastname=lastname
        console.log("firstname=",firstname)
        console.log("lastname=",lastname)


    }
    //method
    fullname()
    {
        //console.log(this.firstname+this.lastname)
        return this.firstname+this.lastn
    }
}

/*
let person =new Person("Nishita","poriya")
let person1 =new Person("Kaushal","Jethva")
console.log(person.age)
console.log(person.location)
console.log(person.fullname())
console.log(person1.fullname())
*/
