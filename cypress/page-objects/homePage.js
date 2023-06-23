import Urls from "./urls";
const myAccountHeaderButton = '#menu-item-100'
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'
const dataBlockNameTop = 'div[data-block-name="woocommerce/product-top-rated"]'
const checkCartFromProductLevel = '.added_to_cart.wc-forward'

export const Product = {
    HoodieWithZipper: {
        Locator: 'a[data-product_id="51"]',
        Name: 'Hoodie with Zipper'
    },

    Sunglasses: {
        Locator: 'a[data-product_id="49"]',
        Name: 'Sunglasses'
    },

    Polo: {
        Locator: 'a[data-product_id="53"]',
        Name: 'Polo'
    }

}

export const TopRated = {
    HoodieWithLogo: {
        Locator: 'a[data-product_id="44"]',
        Name: 'Hoodie with Logo'
    },

    Longsleeve: {
        Locator: 'a[data-product_id="52"]',
        Name: 'Long Sleeve Tee'
    },
}

class HomePage {

    clickMyAccountHeaderButton() {
        cy.get(myAccountHeaderButton).click()
    }

    visitPage() {
        const urls = new Urls
        urls.visitHomePage()
    }

    addProductToCart() {
        cy.get(dataBlockNameNew).within(() => {
            cy.get(Product.HoodieWithZipper.Locator).click()
        })
    }

    clickGoToCartFromProductButton() {
        cy.get(dataBlockNameNew).within(() => {
            cy.get(checkCartFromProductLevel).click()
        })
    }

    addTopProductToCart() {
        cy.get(dataBlockNameTop).within(() => {
            cy.get(TopRated.HoodieWithLogo.Locator).click()
        })

    }
    clickGoToCartFromTopRated() {
        cy.get(dataBlockNameTop).within(() => {
            cy.get(checkCartFromProductLevel).click()
        })
    }
}
export default HomePage;