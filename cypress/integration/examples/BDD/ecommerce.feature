Feature: End to end Ecommerce validation

application Registration

@Registration
Scenario: Ecommerce products delivery 
Given I open Ecommerce Page
When I add items to Cart
And Validate the total price
Then Select the country submit and verify Thankyou

@Smoke
Scenario: Filling the form to shop
Given I open Ecommerce Page
When I fill the form details
|name |gender  |
|bobz |male  |
Then validate the form details
And Select the shop page