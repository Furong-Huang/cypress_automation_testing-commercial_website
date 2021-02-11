class SearchResultPage {

  AlertToEnterKeyword()
  {
    cy.get(".alert").should(
      "contain",
      "Please enter a search keyword"
    );
  }


  validateSearchResult(number) {

    if (number == 0) {
      cy.contains("0 results have been found.").then(() => {
        cy.get(".alert").should(
          "contain",
          "No results were found for your search"
        );
      });
    } else {

      cy.get(".product_img_link").should("have.length", number);

      for (let count = 0; count < number; count++) {
        cy.get(".product_list")
          .find("img.replace-2x")
          .eq(count)
          .invoke('attr','src')
          .then((src) => {
            expect(src).to.be.exist;
          });
      }
    }

  }
}
export default SearchResultPage;
