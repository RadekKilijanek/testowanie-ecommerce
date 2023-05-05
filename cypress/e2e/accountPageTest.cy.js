import HomePage from "../page object/homePage";
import AccountPage from "../page object/myAccountPage";

describe('Test Account page', () => {
    const homePage = new HomePage();
    const accountPage = new AccountPage();

    before(function() {
        cy.fixture('user').as('UserData')
    })

    it('should login to the application', function() {
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        accountPage.fillUsernameFieldWithEmail(this.UserData.email)
        accountPage.fillPasswordField(this.UserData.password)
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfMyAccountNavigation()
    })
})