export class LoginPage {
    constructor() {
        this.userInput = '#user';
        this.passInput = '#pass';
        this.loginButton = '//button[@id="submitForm"]'
    }

    escribirUsuario(usuario) {
        cy.get(this.userInput).type(usuario);
    }

    escribirContraseña(contraseña) {
        cy.get(this.passInput).type(contraseña);
    }

    clickeaLoginButton() {
        cy.xpath(this.loginButton).click();
    };
}