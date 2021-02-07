import MainPage from "../support/PageObjects/mainPage";
import SearchResultPage from "../support/PageObjects/searchResultPage";

describe("Search Function", () => {
  const mainPage = new MainPage();
  const searchResultPage = new SearchResultPage();

  beforeEach(() => {
    cy.visit("/");
  });

  it("Search content but no result", () => {
    mainPage.searchContent("123");
    searchResultPage.validateSearchResult(0);
  });

  it("Search content and have result and images", () => {
    mainPage.searchContent("Woman");
    searchResultPage.validateSearchResult(7);
  });

  it("Search BLOUSES and have 1 result", () => {
    mainPage.searchContent("BLOUSES");
    searchResultPage.validateSearchResult(1);
  });

  it("Search T-SHIRTS and have 1 result", () => {
    mainPage.searchContent("T-SHIRTS");
    searchResultPage.validateSearchResult(1);
  });

  it("Search CASUAL DRESSES and have 4 result", () => {
    mainPage.searchContent("CASUAL DRESSES");
    searchResultPage.validateSearchResult(4);
  });

  it("Search EVENING DRESSES and have 1 result", () => {
    mainPage.searchContent("EVENING DRESSES");
    searchResultPage.validateSearchResult(1);
  });

  it("Search SUMMER DRESSES and have 4 result", () => {
    mainPage.searchContent("SUMMER DRESSES");
    searchResultPage.validateSearchResult(4);
  });
});
