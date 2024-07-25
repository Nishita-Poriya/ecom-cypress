describe('my first test suite',function()

{
    it('my first test case',function()
    {

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    //fixtures
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)

    		//selenium get hit url in browser, cypress get acts like findElement of selenium

    cy.get('.products').should('have.length',5)
    cy.get('.product:visible').should('have.length',4)

    		//Parent child chaining
    //console.log("searcch using classname locator and type ca")
    cy.get('.products').as('productLoactor')
    cy.get('.@produtLocator').find('.product').should('have.length',4)

    cy.get(':nth-child(3)>.product-action >button').click()
    cy.get('.@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
    {
        console.log('sf')

    })


    cy.get('.@productLocator').find('.product').each(($el, index, $list) => {
      const textveg=$el.find('h4.product-name').text()
        if(textveg.includes('Cashews'))
        {
            //console.log("textveg",textveg)
          ($el).find('button').click()
        } 
      

        	//assert if logo text is correctly displayed
		cy.get('.brand').should('have.text','GREENKART')

      cy.get('.brand').then(function(logoelement)
      {
        cy.log(logoelement.text())
      })
//const logo=cy.get('.brand')
		//cy.log(cy.get('.brand').text())
		// cy.log(logo.text())
		       
    })

} )
}