import { AddDeleteProductElements } from "./addDeleteProduct.elements";

export class AddDeleteProductMethods{
    addItemToBasket(){
        AddDeleteProductElements.AddDeleteProductElements.getBtnAddToBasket().first().click();
    }
    verifyItemAddedToBasket(numAdded: string){
        AddDeleteProductElements.AddDeleteProductElements.getLblNotification().should('have.text', numAdded)
    }
    goToShoppingCart() {
        AddDeleteProductElements.AddDeleteProductElements.getBtnBasket().click();
    }
    deleteItem(){
        AddDeleteProductElements.AddDeleteProductElements.getBtnDeleteFromBasket().click();
    }
    verifyItemDeletedFromBasket(numAdded: string) {
        AddDeleteProductElements.AddDeleteProductElements.getLblNotification().should('have.text', numAdded);
    }
}