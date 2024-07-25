		/// <reference types="Cypress" />
		
		describe('My second Test Suite', function()
		{
		
		it('My secondtest case',function() {
		

		cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
/*
		
		cy.get('div.mouse-hover-content').invoke('show')
		cy.contains('Top').click()
		cy.url().should('include','top')
		*/
		

		cy.get('#opentab').then(function(el)
		{

			const url=el.prop('href')
			cy.visit(url)//qaclickacademy.com
			cy.origin(url,()=>
			{
				cy.get("div.sub-menu-bar a[href*='about']").click()
			})
			

		})


	});
});
		