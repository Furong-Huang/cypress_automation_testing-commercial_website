import MainPage from '../support/PageObjects/mainPage'
import ProductDetailPage from '../support/PageObjects/productDetailPage'
import IFlamePage from '../support/PageObjects/iFlamePage'

describe('Main page of products hover function',()=>{
    const productDetailPage = new ProductDetailPage()
    const mainPage = new MainPage()
    const iFlamePage= new IFlamePage()

    before(()=>{
        cy.visit('/')
    })

    beforeEach(()=>{
        cy.clearCart()
    })

    it('Click Add to cart then add product to cart successfully',()=>{
        mainPage.clickAddToCartBtn(1)
        mainPage.verifyAddToCartSuccessfully("Faded Short Sleeve T-shirts","1","S","Orange","16.51")
        mainPage.ConinueShopping()
    })

    it('Verify clicking More button then add to cart in the product detail page',()=>{
        mainPage.clickMoreBtn(1)
        productDetailPage.verifyIsProductDetailPage()
        productDetailPage.checkProductPhoto()
        productDetailPage.checkProductSmallPhotos()
        productDetailPage.addToCart("3","M","Orange")
        productDetailPage.verifyAddToCartSuccessfully("Faded Short Sleeve T-shirts","3","M","Orange","16.51")
        productDetailPage.ConinueShopping()
        productDetailPage.goToMainPage()
    })
    
    it('Through Quickview to add product to cart',()=>{

        mainPage.getQuickView(1)
        iFlamePage.addToCart("3","M","Orange")
        iFlamePage.verifyAddToCartSuccessfully("Faded Short Sleeve T-shirts","3","M","Orange","16.51")

        mainPage.ConinueShopping()

        mainPage.getQuickView(2)
        iFlamePage.addToCart("3","M","Black")
        iFlamePage.verifyAddToCartSuccessfully("Blouse","3","M","Black","27.00")
        
        mainPage.ConinueShopping()

    })


})