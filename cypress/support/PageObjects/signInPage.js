class SignInPage {

    signIn(){
        cy.get('#email').clear().type(Cypress.env('email'))
        cy.get('#passwd').clear().type(Cypress.env('password'))
        cy.get('#SubmitLogin').click()
        cy.url().should('contain','controller=my-account',{timeout:8000})
    }

    goToOrderHistroyPage(){
        cy.contains('Order history and details').click()
        cy.url().should('contain','controller=history',{timeout:8000})
    }

}
export default SignInPage