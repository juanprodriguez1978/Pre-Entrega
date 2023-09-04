import { LoginPage } from '../support/Pages/loginPage';
import { HomePage } from '../support/Pages/homePage';
import { ProductsPage } from '../support/Pages/productsPage';
import { ShoppingCartPage } from '../support/Pages/shoppingCartPage';

describe('Pre-entrega', () => {
    let product;
    const loginPage = new LoginPage;
    const homePage = new HomePage;
    const productsPage = new ProductsPage;
    const shoppingCartPage = new ShoppingCartPage;

    before('before', () => {
        cy.fixture('product').then(producto => {
            product = producto;
        })
    })

    beforeEach('Entra al sistema y se loguea', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        loginPage.escribirUsuario(Cypress.env('username'));
        loginPage.escribirContraseña(Cypress.env('password'));
        loginPage.clickeaLoginButton();
    });

    it('Agrega dos items al carrito, valida productos y precio final', () => {
        var precioFinal = (product.redCap.price + product.blackSocks.price);
        var precioFinalString = String(precioFinal);
        homePage.clickeaOnlineShop();
        productsPage.agregarProdCarrito(product.redCap.name);
        productsPage.agregarProdCarrito(product.blackSocks.name);
        productsPage.redirigeAShoppingCart()
        shoppingCartPage.verificaItem(product.redCap.name).should('exist').siblings('#productPrice').should('contain',product.redCap.price);
        shoppingCartPage.verificaItem(product.blackSocks.name).should('exist').siblings('#productPrice').should('contain',product.blackSocks.price);
        shoppingCartPage.verificaPrecioFinal().should('have.text', precioFinalString);
    });
});