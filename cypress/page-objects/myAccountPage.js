import Urls from "./urls";
const usernameEmailField = "#username"
const passwordField = "#password"
const loginButton = 'button[name=login]'
const myAccountNavigation = ".woocommerce-MyAccount-navigation"
const errorAfterWrongLogin = 'div[role="alert"]'

class AccountPage {

    fillUsernamefieldWithEmail(email) {
        cy.get(usernameEmailField).type(email)
    }

    fillPasswordFieldWithPassword(password) {
        cy.get(passwordField).type(password)
    }

    checkVisibilityOfMyNavigation() {
        cy.get(myAccountNavigation).should('be.visible')
    }

    checkVisibilityOfLoginError() {
        cy.get(errorAfterWrongLogin).should('be.visible')
    }

    clickLoginButton() {
        cy.get(loginButton).click()
    }

    visitPage() {
        const urls = new Urls
        urls.visytMyAccountPage
    }
}

export default AccountPage 