export class AddDeleteProductElements{
    static get AddDeleteProductElements(){
        return {
            getBtnBasket: () =>  cy.get('[aria-label="Show the shopping cart"]'),
            getBtnAddToBasket: () => cy.get('[aria-label="Add to Basket"]'),
            getLblNotification: () => cy.get('.fa-3x.warn-notification'),
            getBtnDeleteFromBasket: () => cy.get('[data-icon="trash-alt"]'),
        }
    }
}