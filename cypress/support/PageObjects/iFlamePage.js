class IFlamePage {

    colorMap(color){
      
        const colorList = [
          { name: "Orange", code: "color_13" },
          { name: "Blue", code: "color_14" },
          { name: "White", code: "color_8" },
          { name: "Black", code: "color_11" },
          { name: "Beige", code: "color_7" },
          { name: "Pink", code: "color_24" },
          { name: "Yellow", code: "color_16" },
          { name: "Green", code: "color_15" },
        ];

        for (let i = 0; i < colorList.length; i++) {
          if (colorList[i].name === color) {
            return colorList[i].code;
          }
        }
            

    }
    

    addToCart(quantity,size,color){

        let temp = this.colorMap(color)

        cy.getIframeBody().find('#quantity_wanted').clear().type(quantity)
        cy.wait(2000)
        cy.getIframeBody().find('#uniform-group_1').click().find('#group_1').select(size)
        cy.getIframeBody().find('#'+temp).click()
        cy.getIframeBody().find('#add_to_cart').click()

    }

    verifyAddToCartSuccessfully(name,quantity,size,color,price){

       cy.verifyAddToCartSuccessfully(name,quantity,size,color,price)

    }
}
export default IFlamePage