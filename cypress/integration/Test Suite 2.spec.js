import MainPage from '../support/PageObjects/mainPage'
import ProductDetailPage from '../support/PageObjects/productDetailPage'
import IFlamePage from '../support/PageObjects/iFlamePage'

describe('Main page of products hang over function',()=>{
    const productDetailPage = new ProductDetailPage()
    const mainPage = new MainPage()
    const iFlamePage= new IFlamePage()
    const color={
        "Orange":"color_13",
        "Blue": "color_14",
        "White": "color_8",
        "Black":"color_11",
        "Beige":"color_7",
        "Pink":"color_24",
        "Yellow": "color_16",
        "Green":"color_15"
    }

    beforeEach(()=>{
        cy.visit('/')
    })
    
    it('Through Quickview to add product to cart',()=>{
 
        mainPage.getQuickView(0)
        iFlamePage.addToCart("3","M",color.Orange)
        iFlamePage.verifyAddToCartSuccessfully("Faded Short Sleeve T-shirts","3","M","Orange","16.51")

        mainPage.ConinueShopping()

        mainPage.getQuickView(1)
        iFlamePage.addToCart("3","M",color.Black)
        iFlamePage.verifyAddToCartSuccessfully("Blouse","3","M","Black","27.00")

        mainPage.ConinueShopping()

        mainPage.getQuickView(2)
        iFlamePage.addToCart("3","M",color.Orange)
        iFlamePage.verifyAddToCartSuccessfully("Printed Dress","3","M","Orange","26.00")

        mainPage.ConinueShopping()

        mainPage.getQuickView(3)
        iFlamePage.addToCart("3","L",color.Pink)
        iFlamePage.verifyAddToCartSuccessfully("Printed Dress","3","L","Pink","50.99")

        mainPage.ConinueShopping()

        mainPage.getQuickView(4)
        iFlamePage.addToCart("3","L",color.Yellow)
        iFlamePage.verifyAddToCartSuccessfully("Printed Summer Dress","3","L","Yellow","28.98")

        mainPage.ConinueShopping()

        mainPage.getQuickView(5)
        iFlamePage.addToCart("2","M",color.White)
        iFlamePage.verifyAddToCartSuccessfully("Printed Summer Dress","2","M","White","30.50")

        mainPage.ConinueShopping()

        mainPage.getQuickView(6)
        iFlamePage.addToCart("2","M",color.Green)
        iFlamePage.verifyAddToCartSuccessfully("Printed Chiffon Dress","2","M","Green","16.40")

    })

    it('Click Add to cart then add product to cart successfully',()=>{
        mainPage.getAddToCartBtns(0).click()
        mainPage.verifyAddToCartSuccessfully("Faded Short Sleeve T-shirts","1","S","Orange","16.51")
    })

    it.only('verify going to the product detail page after clicking More button',()=>{
        mainPage.getMoreBtns(0).click()
        productDetailPage.verifyIsProductDetailPage()
        productDetailPage.checkProductPhoto()
        productDetailPage.checkProductSmallPhotos()
        productDetailPage.addToCart("3","M",color.Orange)
        productDetailPage.verifyAddToCartSuccessfully("Faded Short Sleeve T-shirts","3","M","Orange","16.51")
    })
})