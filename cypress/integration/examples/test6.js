		/// <reference types="Cypress" />
		
		describe('handling chold window',() =>
		{
		
		it('should handle child window',()=> {

		
		cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

		//handle child window
		cy.get("#opentab").invoke('removeAttr','target').click();

		cy.origin("https://www.qaclickacademy.com",()=>
		{
		
		cy.get("#navbarSupportedContent a[href*='about']").click();

		cy.get(".mt-50 h2").should('contain','QAClick Academy');

		})

	});
});
		