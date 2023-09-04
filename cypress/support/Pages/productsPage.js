export class ProductsPage {
    constructor() {
        this.goToShoppingCart = '#goShoppingCart'
    }

    redirigeAShoppingCart() {
        cy.get(this.goToShoppingCart).click()
    }

    agregarProdCarrito(prod) {
        cy.contains(prod).siblings('button[type="button"]').click();
        cy.xpath("//button[@id='closeModal']").click();
    }
}