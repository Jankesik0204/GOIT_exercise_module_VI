describe("User can login to GoIT page.", () => {

    const loginPage = new LoginPage()
    const homePage = new HomePage()

  beforeEach(() => {
    loginPage.visit('https://www.x-kom.pl')
  })
    it("Click search bar and type product", () => {
        cy.get('[placeholder="Czego szukasz?"]').eq(0).click().type("Myszka suuper ");
        cy.get('[alt="Myszka przewodowa FR-TEC Dragon Ball Super GOKU"]').eq(0).click();

    });
});