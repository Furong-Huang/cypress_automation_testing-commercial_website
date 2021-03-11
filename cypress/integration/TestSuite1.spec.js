import MainPage from "../support/PageObjects/mainPage";
import SearchResultPage from "../support/PageObjects/searchResultPage";

describe("Search Function", () => {
  const mainPage = new MainPage();
  const searchResultPage = new SearchResultPage();

  before(() => {
    cy.visit("/");
  });


  it("Verify searching normal content T-SHIRTS", () => {
    mainPage.searchContent("T-SHIRTS");
    searchResultPage.validateSearchResult(1);
  });

  it("Verify searching keyword with long content", () => {
    mainPage.searchContent("ddddddddddddddddddddddddd T-SHIRTS dddddsfsfsfddddddddddddddddddddddddddddddddddgdgdhfghfgdhfgdhgdfghdfhgdghdfghdhdghdhfhf");
    searchResultPage.validateSearchResult(0);
  });

  it("Verify searching whether support enter button", () => {
    mainPage.searchContentByEnter("CASUAL DRESSES{enter}");
    searchResultPage.validateSearchResult(4);
  });

  it("Verify searching empty content", () => {
    mainPage.searchContentByEnter("     {enter}");
    searchResultPage.validateSearchResult(0);
  });

  it("Verify searching content not senstive with uppercase or lowercase", () => {
    mainPage.searchContent("BLOuses");
    searchResultPage.validateSearchResult(1);

  });

  it("Verify searching content with special characters", () => {
    mainPage.searchContent("T-SHIR@TS");
    searchResultPage.validateSearchResult(1);
  });

  it("Verify searching content not support in mutiple language such as Japanese or Chinese", () => {
    mainPage.searchContent("印花连衣裙");
    searchResultPage.validateSearchResult(0);

    mainPage.searchContent("プリントドレス");
    searchResultPage.validateSearchResult(0);
  });

  it("Verify click searching button without any content", () => {
    mainPage.searchContent("");
    searchResultPage.AlertToEnterKeyword();
  });
});
