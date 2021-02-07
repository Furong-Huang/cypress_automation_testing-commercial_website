class MainPage{

     verifyAddToCartSuccessfully(name,quantity,size,color,price){

        cy.verifyAddToCartSuccessfully(name,quantity,size,color,price)
 
     }

    getMoreBtns(number){
       return cy.contains('More').eq(number)
    }


    getQuickView(number){
        cy.get('#homefeatured').find('.quick-view-mobile').eq(number).click({force:true})
    }

    ConinueShopping(){
        return cy.get('[title="Continue shopping"]').click()
    }

    getAddToCartBtns(number){
       return cy.contains('Add to cart').eq(number)
    }

    searchContent(keyword) {
        cy.get('#search_query_top').clear().type(keyword)
        cy.get('[name="submit_search"]').click()
        cy.url().should('contain','search_query',{timeout:8000})
    }

    goToSignInPage()
    {
        cy.contains('Sign in').click()
        cy.url().should('contain','controller=authentication&back=my-account',{timeout:8000}).then(()=>{
            console.log('We are in the SignInPage.')
        })

    }


}
export default MainPage