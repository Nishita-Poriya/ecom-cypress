//Inheritance is the main pillar in Object oriented Programming 
//one claass can inherit/acquire the properties , methods of other class
//the class which inherits the properties of the other is known as subclass(derived class,child class)
//the class whose properties are inheriterd is known as superclass

const Person=require("./basics8")
class Pet extends Person
{
    /*
    get location()
    {
    return "Blue cross"

    }
   */
    constructor(firstname,lastname)
    {
        //call parent class constructor
        super(firstname,lastname)
    }

}

let pet=new Pet("tommy ","doggy")
console.log("pet name=",pet)
pet.fullname()
console.log(pet.location)

