// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// cypress/support/index.js

require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('getIframeBody', () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
    .get('.fancybox-iframe')
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
  })



Cypress.Commands.add("addToCart",(quantity,size,color)=>{

    function colorMap(color){
      
        const colorList = [
          { name: "Orange", code: "color_13" },
          { name: "Blue", code: "color_14" },
          { name: "White", code: "color_8" },
          { name: "Black", code: "color_11" },
          { name: "Beige", code: "color_7" },
          { name: "Pink", code: "color_24" },
          { name: "Yellow", code: "color_16" },
          { name: "Green", code: "color_15" },
        ];

        for (let i = 0; i < colorList.length; i++) {
          if (colorList[i].name === color) {
            return colorList[i].code;
          }
        }
            

    }

    let temp= colorMap(color)

    cy.get('#bigpic').invoke('attr','src').then((src)=>{
      expect(src).to.be.exist
    })
    cy.get('.img-responsive').invoke('attr','src').then((src)=>{
      expect(src).to.be.exist
    })
    cy.get('#quantity_wanted').clear().type(quantity)
    cy.get('#uniform-group_1').click().find('#group_1').select(size)
    cy.get('#'+temp).click()
    cy.get('#add_to_cart').click()
})

Cypress.Commands.add("verifyAddToCartSuccessfully",(name,quantity,size,color,price)=>{
    cy.contains('Product successfully added to your shopping cart').should('be.visible')
    cy.get('#layer_cart_product_attributes').should('contain', color+', '+size)
    cy.get('#layer_cart_product_quantity').invoke('text').should('eq',quantity)
    cy.get('#layer_cart_product_title').should('contain',name)
    cy.get('#layer_cart_product_price').invoke('text').should('eq','$'+(parseFloat(price)*parseFloat(quantity)).toFixed(2).toString())
})

Cypress.Commands.add("clearCart",()=>{
  
  cy.get('[title="View my shopping cart"]').click();
  if(cy.contains('Your shopping cart is empty.'))
  {
     cy.get('.logo').click()
  }else{
    cy.get(".alert").should("not.include","Your shopping cart is empty.").then(()=>{

      cy.get('[data-title="Delete"]').then((element) => {
        for (let i = 0; i < element.length; i++) {
          cy.wrap(element).eq(i).click();
        }
    
        cy.get(".alert").should("not.include", "Your shopping cart is empty.");
        cy.get('.logo').click()
      });
    })
  }
  
})
