import MainPage from "../support/PageObjects/mainPage"
import SignInPage from "../support/PageObjects/signInPage"
import OrderHistoryPage from "../support/PageObjects/orderHistoryPage"
import MyAccountPage from "../support/PageObjects/myAccountPage"

describe('Order History and Details function in My Account Page',()=>{
    const mainPage = new MainPage();
    const signInPage = new SignInPage();
    const orderHistoryPage = new OrderHistoryPage();
    const myAccountPage = new MyAccountPage();

    before(()=>{
        cy.visit("/")
        mainPage.goToSignInPage()
        signInPage.signIn()
        myAccountPage.goToOrderHistroyPage()
    })

    it('Verify sorting order by price',()=>{
       
        orderHistoryPage.checkSortByPrice()
    })

    it('Verify showing order details function',()=>{

        orderHistoryPage.showOrderDetails()
        orderHistoryPage.checkOrderDetails()

    })

    it('Verify sending a message function',()=>{

        orderHistoryPage.showOrderDetails()
        orderHistoryPage.checkSendMessage()

    })

    it('Verify reorder function',()=>{

        orderHistoryPage.showOrderDetails()
        orderHistoryPage.checkReorder()

    })

    it.only('Verify downloading invoice fucntion',()=>{
        orderHistoryPage.checkDownloadInvoice()
    })
})