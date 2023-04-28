import { LoginMethods } from "cypress/pageObjects/login/login.methods";
import { AddOutOfStockMethods } from "cypress/pageObjects/addOutOfStock/addOutOfStock.methods";

describe('template spec', () => {
  var login = new LoginMethods();
  var products = new AddOutOfStockMethods();

  beforeEach(function () {
    login.navigateToLoginAndCloseDialog('http://localhost:3000/login#/login');
    login.login('milan.todorovik01@gmail.com', 'Test123$');
    login.verifySuccessfullLogin();
  })

  it('User should not be able to add an item that is out of stock into basket', () => {
    products.addItemToBasket('owasp juice shop coaster');
    products.verifyItemNotAddedToBasket('0');
  })
})