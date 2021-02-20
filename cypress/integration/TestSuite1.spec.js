import MainPage from "../support/PageObjects/mainPage";
import SearchResultPage from "../support/PageObjects/searchResultPage";

describe("Search Function", () => {
  const mainPage = new MainPage();
  const searchResultPage = new SearchResultPage();

  before(() => {
    cy.visit("/");
  });


  it("验证搜索正常内容T-SHIRTS", () => {
    mainPage.searchContent("T-SHIRTS");
    searchResultPage.validateSearchResult(1);
  });

  it("验证搜索含关键字的较长内容", () => {
    mainPage.searchContent("ddddddddddddddddddddddddd T-SHIRTS dddddsfsfsfddddddddddddddddddddddddddddddddddgdgdhfghfgdhfgdhgdfghdfhgdghdfghdhdghdhfhf");
    searchResultPage.validateSearchResult(0);
  });

  it("验证搜索是否支持回车键", () => {
    mainPage.searchContentByEnter("CASUAL DRESSES{enter}");
    searchResultPage.validateSearchResult(4);
  });

  it("验证搜索空内容", () => {
    mainPage.searchContentByEnter("     {enter}");
    searchResultPage.validateSearchResult(0);
  });

  it("验证搜索内容大小写不敏感", () => {
    mainPage.searchContent("BLOuses");
    searchResultPage.validateSearchResult(1);

  });

  it("验证搜索包含特殊字符内容", () => {
    mainPage.searchContent("T-SHIR@TS");
    searchResultPage.validateSearchResult(1);
  });

  it("验证搜索不支持多语言-日文，中文", () => {
    mainPage.searchContent("印花连衣裙");
    searchResultPage.validateSearchResult(0);

    mainPage.searchContent("プリントドレス");
    searchResultPage.validateSearchResult(0);
  });

  it("验证不输入内容的点击搜索", () => {
    mainPage.searchContent("");
    searchResultPage.AlertToEnterKeyword();
  });
});
