class MainPage{

     verifyAddToCartSuccessfully(name,quantity,size,color,price){

        cy.verifyAddToCartSuccessfully(name,quantity,size,color,price)
 
     }

    getMoreBtns(number){
       return cy.contains('More').eq(number-1)
    }


    getQuickView(number){
        cy.get('#homefeatured').find('.quick-view-mobile').eq(number).click({force:true})
    }

    ConinueShopping(){
        return cy.get('[title="Continue shopping"]').click()
    }

    getAddToCartBtns(number){
       return cy.get('[title="Add to cart"]').eq(number-1)
    }

    searchContent(keyword) {
        if(keyword === "")
        {
            cy.get('#search_query_top').clear()
            cy.get('[name="submit_search"]').click()
             cy.url().should('contain','search_query')
        }
        else{
            cy.get('#search_query_top').clear().type(keyword)
            cy.get('[name="submit_search"]').click()
            cy.url().should('contain','search_query')
        }
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