import CartPage from "../page object/cartPage";
import HomePage from "../page object/homePage";

describe('add item to cart, and remove this item from cart', () => {
    const homePage = new HomePage();
    const cartPage = new CartPage();

    it('should add product to cart and delete it from there', function() {
        homePage.visitPage()
        homePage.addProductToCart()
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart()
        cartPage.removeItemFromCart()
        cartPage.checkThatCartIsEmpty()
    })
})