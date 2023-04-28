import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { AddDeleteProductMethods } from "cypress/pageObjects/addDeleteProduct/addDeleteProducts.methods";

describe('template spec', () => {
  var login = new LoginMethods();
  var products = new AddDeleteProductMethods();

  beforeEach(function () {
    login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
    login.login('milan.todorovik01@gmail.com', 'Test123$');
    login.verifySuccessfullLogin();
  })

  it('User should be able to add item into basket and delete it from the basket', () => {
    products.addItemToBasket();
    products.verifyItemAddedToBasket('1');
    products.goToShoppingCart();
    products.deleteItem();
    products.verifyItemDeletedFromBasket('0')
  })
})