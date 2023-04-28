import { AddOutOfStockElements } from "./addOutOfStock.elements";

export class AddOutOfStockMethods{
    addItemToBasket(item: string){
        AddOutOfStockElements.AddOutOfStockElements.getBtnSearch().click();
        AddOutOfStockElements.AddOutOfStockElements.getTxtSearch().type(item);
        AddOutOfStockElements.AddOutOfStockElements.getTxtSearch().type('{enter}');
        AddOutOfStockElements.AddOutOfStockElements.getBtnAddToBasket().click();
    }
    verifyItemNotAddedToBasket(numAdded: string){
        AddOutOfStockElements.AddOutOfStockElements.getLblNotification().should('have.text', numAdded)
    }
}