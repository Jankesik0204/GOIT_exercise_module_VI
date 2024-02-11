import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"

describe("User can login to GoIT page.", () => {

    const loginPage = new LoginPage()
    const homePage = new HomePage()

  beforeEach(() => {
    loginPage.visit()
  })
    it("Succesfully login to the page", () => {
        loginPage.fillEmail("testowy_tester@o2.pl")
        loginPage.fillPassword("testowe_haslo")
        loginPage.clickLoginButton()
    
        homePage.openMenuAndLogout()
      })
  });