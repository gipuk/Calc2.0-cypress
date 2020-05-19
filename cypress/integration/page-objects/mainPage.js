export class MainPage {
    navigate () {
        cy.visit('https://web2.0calc.com')
        cy.get('#cookieconsentallowall').click()
    }
}