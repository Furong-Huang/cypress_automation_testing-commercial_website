class ProductDetailPage {

    goToMainPage(){
        cy.get('#header_logo').click()
    }

    verifyIsProductDetailPage(){
        return cy.url().should('contain','controller=product')
    }

    addToCart(quantity,size,color){

        cy.addToCart(quantity,size,color)

    }

    ConinueShopping(){
        cy.get('[title="Continue shopping"]').click()
    }

    verifyAddToCartSuccessfully(name,quantity,size,color,price){

        cy.verifyAddToCartSuccessfully(name,quantity,size,color,price)
 
    }

    checkProductPhoto(){
        return cy.get('#bigpic').invoke('attr','src').then((src)=>{
            expect(src).to.be.exist
        })
    }

    checkProductSmallPhotos(){
        return cy.get('.img-responsive').invoke('attr','src').then((src)=>{
            expect(src).to.be.exist
        })
    }

}
export default ProductDetailPage