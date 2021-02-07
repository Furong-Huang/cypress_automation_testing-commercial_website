class IFlamePage {

    colorMap(color){

        var color1;
        const colorList=[
            ["Orange","color_13"],
            ["Blue", "color_14"],
            ["White", "color_8"],
            ["Black","color_11"],
            ["Beige","color_7"],
            ["Pink","color_24"],
            ["Yellow", "color_16"],
            ["Green","color_15"]
        ]


        for(let i=0;i<colorList.length;i++)
        {
            if(colorList[i][0]==color)
            {
                color1=colorList[i][1];
            }
        }

        return color1;

    }
    

    addToCart(quantity,size,color){

        let temp = this.colorMap(color)

        cy.getIframeBody().find('#quantity_wanted', {timeout:10000}).clear().type(quantity)
        cy.wait(2000)
        cy.getIframeBody().find('#uniform-group_1', {timeout:10000}).click().find('#group_1', {timeout:9000}).select(size)
        cy.getIframeBody().find('#'+temp, {timeout:10000}).click()
        cy.getIframeBody().find('#add_to_cart', {timeout:10000}).click()

    }

    verifyAddToCartSuccessfully(name,quantity,size,color,price){

       cy.verifyAddToCartSuccessfully(name,quantity,size,color,price)

    }
}
export default IFlamePage