		/// <reference types="Cypress" />

    import Homepage from "../pageObjects/Homepage"
    import ProductPage from "../pageObjects/Products"

		describe('My second Test Suite', function()
		{
            before(function()  {
                
                cy.fixture('example').then(function(data)
                {
                console.log(data)
                this.data=data

                })
              })
              
		it('My secondtest case',function() {

      Cypress.config('defaultCommandTimeout',8000)

                const homepage =new Homepage()
                const productpage=new ProductPage()
                Cypress.env('url')
                cy.visit(Cypress.env('url')+"/angularpractice/")
                //cy.get(':nth-child(1) > .form-control').type("Nishita")
                // directly click on the name textbox to get the css from cypress cursor
    
                //create object to resue it from homepage.
                homepage.getEditBox().type(this.data.name)
                homepage.getGender().select(this.data.gender)
                homepage.getTwoWayDataBinding().should('have.value', this.data.name)
                homepage.getEditBox().should('have.attr','minlength','2')
                homepage.getEnterpreneaur().should('be.disabled')
                homepage.getshopTab().click()
                Cypress.config('defaultCommandTimeout',8000)
                
                //cy.wait(3000)
                /*
                cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
                cy.get('select').select(this.data.gender)
                cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
                cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
                cy.get('#inlineRadio3').should('be.disabled')
               // cy.pause()
              */

                //cy.get(':nth-child(2) > .nav-link').click().debug()

                
              this.data.productName.forEach(function(element)
                {
                  cy.selectProduct(element)
                });

                productpage.checkOutButton().click()


                //sum up the 2 products on checkout page
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

                //checkout page, select country  for purchase and confirm message expect(actualText.includes("Success")).to.be.true
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
                cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

              //  cy.selectProduct('Blackberry')
                //cy.selectProduct('Nokia Edge')
    })
    })

