import { faker } from "@faker-js/faker"

const firstNameField = '#billing_first_name'
const lastNameField = '#billing_last_name'
const companyField = "#billing_company"
const adress1 = "#billing_address_1"
const zipcode = "#billing_postcode"
const city = '#billing_city'
const phone = '#billing_phone'
const email = '#billing_email'
const finishOrderButton = '#place_order'
const countryDropdown = '#billing_country'
const countryDropdownPoland = 'Polska'
const orderConfirmation = '.woocommerce-order'

class OrderPage {

    fillAllRequiredFields() {
        cy.get(firstNameField).type(faker.name.firstName());
        cy.get(lastNameField).type(faker.name.lastName());
        cy.get(countryDropdown).select(countryDropdownPoland, { force: true });
        cy.get(adress1).type(faker.address.streetAddress());
        cy.get(zipcode).type(faker.address.zipCode('##-###'));
        cy.get(city).type(faker.address.city());
        cy.get(phone).type(faker.phone.number('+48 #########'));
        cy.get(email).type(faker.internet.email());
    }
    finishOrder() {
        cy.get(finishOrderButton).click();
    }
    checkOrderFinished() {
        cy.get(orderConfirmation, { timeout: 30000 }).should('exist')
    }
}

export default OrderPage;