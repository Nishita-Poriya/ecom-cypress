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

     const homepage =new Homepage()
     const productpage=new ProductPage()


                cy.visit("https://rahulshettyacademy.com/angularpractice/")
                //cy.get(':nth-child(1) > .form-control').type("Nishita")
                // directly click on the name textbox to get the css from cypress cursor
    
                homepage.getEditBox().type(this.data.name)
                homepage.getGender().select(this.data.gender)
                homepage.getTwoWayDataBinding().should('have.value', this.data.name)
                homepage.getEditBox().should('have.attr','minlength','2')
                homepage.getEnterpreneaur().should('be.disabled')

                homepage.getshopTab().click()
                /*
                cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
                cy.get('select').select(this.data.gender)
                cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
                cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
                cy.get('#inlineRadio3').should('be.disabled')
               // cy.pause()
              */

                cy.get(':nth-child(2) > .nav-link').click().debug()

                this.data.productName

                this.data.productName.forEach(function(element)
                {
                  cy.selectProduct(element)
                });

                productpage.checkOutButton().click()

                cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()

                cy.selectProduct('Blackberry')
                cy.selectProduct('Nokia Edge')
    })
    })

