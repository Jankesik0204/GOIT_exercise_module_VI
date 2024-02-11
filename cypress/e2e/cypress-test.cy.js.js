import LoginPage from "../pages/loginPage"
import homePage from "../pages/homePage"
const loginPage = new LoginPage()
const homePage = new HomePage()

describe('Check Login',()=>{
  
  beforeEach('go toa page', ()=>{
    cy.visit('/'); //prowadzi do strony baseURL
  });

  it('succesfully login user_1 to the GoIT page',()=>{
    cy.fixture('user1.json').then((user)=>{
      const user_email = user.email;
      const user_password = user.password;

      loginPage.loginUser(user_email,user_password);

      cy.get('[id="go-to-the-course-homepage-widget"]')
        .scrollIntoView()
        .should('be.visible');
    });

    describe.skip('user visit all tabls',()=>{
      before('go to page and login',()=>{
        cy.visit('/');
        cy.fixture('user1.json').then((user)=>{
          const user_email = user.email;
          const user_password = user.password;
    
          //loginPage.loginUser(user_email,user_password);
        });
      });
      it('user successfully visit all tabs',()=>{
        homePage.selectMenuElement('Courses');
        cy.wait(3000);
        homePage.selectMenuElement('Duels');
        cy.wait(3000);
        homePage.selectMenuElement('Tournament');
        cy.wait(3000);
      });
      after(()=>{
        homePage.menuComponent.logout();
      })
    })
  });



})