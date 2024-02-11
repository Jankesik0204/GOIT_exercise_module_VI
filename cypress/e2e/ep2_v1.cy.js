import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"

describe("User can login to GoIT page.", () => {

    const loginPage = new LoginPage()
    const homePage = new HomePage()

  beforeEach(() => {
    loginPage.visit()
  })
    it("Test 1: Login and Logout with user888@gmail.com", () => {
        loginPage.fillEmail("user888@gmail.com")
        loginPage.fillPassword("1234567890")
        loginPage.clickLoginButton()
    
        homePage.openMenuAndLogout()
      })
  });