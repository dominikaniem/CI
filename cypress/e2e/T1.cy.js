import HomePage from "../page-objects/homePage";
import AccountPage from "../page-objects/myAccountPage";
import { faker } from '@faker-js/faker';

describe('Online Shop test automation', () => {
    const homePage = new HomePage();
    const accountPage = new AccountPage()


    before(function () {
        cy.fixture('users').as('userData')     
    })


    it('should login to the application', function () {
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        accountPage.fillUsernamefieldWithEmail(this.userData.email)
        accountPage.fillPasswordFieldWithPassword(this.userData.password)
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfMyNavigation();

    })

    it('should not login to the application', function () { 
        homePage.visitPage()
        homePage.clickMyAccountHeaderButton()
        accountPage.fillUsernamefieldWithEmail(faker.internet.email())
        accountPage.fillPasswordFieldWithPassword(faker.internet.password())
        accountPage.clickLoginButton()
        accountPage.checkVisibilityOfLoginError()
    })


})