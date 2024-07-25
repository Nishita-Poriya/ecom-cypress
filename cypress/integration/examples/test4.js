		/// <reference types="Cypress" />
		
		describe('My second Test Suite', function()
		{
		
		it('My secondtest case',function() {

		//checkboxes
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
		cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
		cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
		cy.get('input[type="checkbox"]').check(['option2','option3'])

		
			//static ddropdown
		cy.get('select').select('option2').should('have.value','option2')

		//dynamic dropdown 
		cy.get('#autocomplete').type('ind')

		cy.get('.ui-menu-item').each(($el, index, $list) =>
		 {

			if($el.text()==="India")
			{
				$el.click()
			}


		} )

		//autocompleted
		cy.get('#autocomplete').should('have.value','India')
		console.log("india")

		//radio button 
		cy.get('[value="radio1"]').check().should('be.checked')

		//visible -invisible
		cy.get('#displayed-text').should('be.visible')
		cy.get('#hide-textbox').click()
		cy.get('#displayed-text').should('not.be.visible')
		cy.get('#show-textbox').click()
	})
})
		