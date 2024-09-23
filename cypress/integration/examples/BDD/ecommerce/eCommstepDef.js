import { Given,When,Then } from '@badeball/cypress-cucumber-preprocessor';
import Homepage from '../../../../support/pageObjects/Homepage';
import ProductPage from '../../../../support/pageObjects/ProductPage'

const homepage =new Homepage()
const productpage=new ProductPage()
let name

Given ('I open Ecommerce Page',()=>
{
    cy.visit(Cypress.env('url')+"/angularpractice/")
})

//When I add items to Cart
When('When I add items to Cart',function()
{
    homePage . getShopTab().click()
    


this.data.productName.forEach(function(element)
{
    cy.selectProduct(element)
});

productpage.checkOutButton().click()
})


When('Validate the total price',()=>
{
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>
    {
    //  cy.log($el.text())

      const amount=$el.text()
      var res= amount.split(" ")
      res = res[1].trim()
      sum=Number(sum)+Number(res)
     
    }).then(function()
    {
      cy.log(sum)
    })

    cy.get('h3 strong').then(function(element)
    {
      const amount=element.text()
      var res=amount.split("")
      var total =res[1].trim()
      expect(Number(total)).to.equal(sum)

    })

})

Then('Select the country submit and verify Thankyou')
{
    cy.contains('Checkout').click()
                cy.get('#country').type('India')
              //  cy.wait()

                cy.get('.suggestions > ul > li > a').click()
                cy.get('#checkbox2').click({force: true})
                cy.get('input[type="submit"]').click()

                //cy.get('.alert').should('have.text',"Success! Thank you! Your order will be delivered in next few weeks :-).")

                cy.get('.alert').then(function(element)
                {
                  const actualText=element.text()
                  expect(actualText.includes("Success")).to.be.true
                
              })
}


//2nd scenario
When('I fill the form details',function(dataTable)
{
    //   [bob, male ]
    name =dataTable.rawTable[1][0]
    homepage.getEditBox().type(dataTable.rawTable[1][0])
    homepage.getGender().select(dataTable.rawTable[1][1])

})

//then 
Then ('validate the form details',function()
{
    homepage.getTwoWayDataBinding().should('have.value',name)
    homepage.getEditBox().should('have.attr','minlength','2')
    homepage.getEnterpreneaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout',8000)
})

//
And('Select the shop page',()=>
{
    homepage.getshopTab().click()
})