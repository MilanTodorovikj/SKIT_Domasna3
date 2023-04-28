export class AddOutOfStockElements{
    static get AddOutOfStockElements(){
        return {
            getBtnSearch: () => cy.get('.mat-search_icon-search'),
            getTxtSearch: () => cy.get('#mat-input-0'),
            getBtnAddToBasket: () => cy.get('[aria-label="Add to Basket"]'),
            getLblNotification: () => cy.get('.fa-3x.warn-notification'),
        }
    }
}