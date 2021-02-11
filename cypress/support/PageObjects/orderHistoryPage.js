class OrderHistoryPage{

    showOrderDetails(){
        cy.intercept('GET','http://automationpractice.com/index.php?controller=order-detail&id_order=285020&ajax=true').as('response')
        cy.get('.color-myaccount').first().click()
        cy.wait('@response',{timeout:10000}).its('response.statusCode').should('eq',200)
    }


    checkOrderDetails(){
        cy.get('.dark > strong').should('contain','MMTRUBRUM')
    }

    checkSendMessage(){
        cy.get('.dark > strong').should('contain','MMTRUBRUM')
        cy.get('[name="id_product"]').select('2')
        cy.get('[name="msgText"]').clear().type('Change color to White')
        cy.get('[name="submitMessage"]').contains('Send').click()
        cy.get('.alert').should('contain','Message successfully sent')
    }

    checkReorder(){
        cy.get('#submitReorder').contains('Reorder').click()
        cy.url().should('contain','controller=order')
    }

    checkDownloadInvoice(){
        
        cy.downloadFile('http://automationpractice.com/index.php?controller=pdf-invoice&id_order=285020',
            'cypress/fixtures/Download', 'IN057003.pdf')
        cy.readFile('cypress/fixtures/Download/IN057003.pdf').should('be.exist')
    }

    checkSortByPrice(){
        
        cy.get('#order-list').find('thead th[data-hide="phone"]').click().invoke('attr','class').should('include','footable-sorted').then(()=>{
            cy.get('.history_price').eq(0).invoke('attr','data-value').then(a=>{
             cy.get('.history_price').eq(1).invoke('attr','data-value').then(b=>{
                 cy.get('.history_price').eq(2).invoke('attr','data-value').then(c=>{
                     cy.get('.history_price').eq(3).invoke('attr','data-value').then(d=>{
                         cy.get('.history_price').eq(4).invoke('attr','data-value').then(e=>{
                             expect(parseFloat(a)).to.lessThan(parseFloat(b))
                             expect(parseFloat(b)).to.lessThan(parseFloat(c))
                             expect(parseFloat(c)).to.lessThan(parseFloat(d))
                             expect(parseFloat(d)).to.lessThan(parseFloat(e))
                         })
                     })
                 })
               })
             }) 
         })
    }

}
export default OrderHistoryPage