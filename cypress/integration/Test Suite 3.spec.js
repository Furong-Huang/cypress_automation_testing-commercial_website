import MainPage from "../support/PageObjects/mainPage"
import SignInPage from "../support/PageObjects/signInPage"
import OrderHistoryPage from "../support/PageObjects/orderHistoryPage"

describe('Order History and Details function in My Account Page',()=>{
    const mainPage = new MainPage();
    const signInPage = new SignInPage();
    const orderHistoryPage = new OrderHistoryPage();

    beforeEach(()=>{
        cy.visit("/")
        mainPage.goToSignInPage()
        signInPage.signIn()
        signInPage.goToOrderHistroyPage()
    })

    it('Sort order price by Desc ',()=>{
        
    })

    it('Sort order price by Asc ',()=>{
        
    })

    it('Sort order by Date',()=>{
        
    })

    it('Check reorder function',()=>{

    })

    it('Show Payment and Invoice',()=>{

    })

    it('Show order details',()=>{

    })

    it('Add a message and send',()=>{

    })
})