/*
var studentNames=Array (3) 


var studentNames=["nishita","Kaushal","Vruta"]
console.log("array to print=",studentNames)
//var newstudent=["khushi"]
console.log(studentNames.unshift("khushi"))
console.log("array to print=",studentNames)

console.log(studentNames.pop("Vruta"))
console.log("remove vruta ",studentNames)

console.log(studentNames.sort())
console.log("studentNames sorted=",studentNames)
*/

import 'cypress-iframe'

describe('Frames Test',function() {
    it('Demo example',function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")

        cy.iframe().find("a[href*='mentorship']").eq(0).click()

       //cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    })
})