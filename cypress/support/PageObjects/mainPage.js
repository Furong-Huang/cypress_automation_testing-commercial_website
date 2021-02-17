class MainPage{

     verifyAddToCartSuccessfully(name,quantity,size,color,price){

        cy.verifyAddToCartSuccessfully(name,quantity,size,color,price)
 
     }

    clickMoreBtn(number){
       cy.get('#homefeatured [itemprop="image"]').eq(number-1).trigger('mouseover')
       cy.contains('More').click()
    }


    getQuickView(number){
        cy.get('#homefeatured [itemprop="image"]').eq(number-1).trigger('mouseover')
        cy.get('#homefeatured .quick-view').eq(number-1).click()
    }

    ConinueShopping(){
        return cy.get('[title="Continue shopping"]').click()
    }

    clickAddToCartBtn(number){
        cy.get('#homefeatured [itemprop="image"]').eq(number-1).trigger('mouseover')
        cy.contains('Add to cart').click()
    }

    searchContent(keyword) {
            cy.get('#search_query_top').clear().then((element)=>{
                    if(keyword !=="")
                    {
                        cy.wrap(element).type(keyword)
                    }
            })
            cy.get('[name="submit_search"]').click()
            cy.url().should('contain','search_query')
    }

    searchContentByEnter(keyword) {
        cy.get('#search_query_top').clear().type(keyword)
        cy.url().should('contain','search_query')
    }

    goToSignInPage()
    {
        cy.contains('Sign in').click()
        cy.url().should('contain','controller=authentication&back=my-account').then(()=>{
            console.log('We are in the SignInPage.')
        })

    }


}
export default MainPage