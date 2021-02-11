class MyAccountPage{

    goToOrderHistroyPage(){
        cy.contains('Order history and details').click()
        cy.url().should('contain','controller=history',{timeout:8000})
    }

}
export default MyAccountPage