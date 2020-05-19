describe ('Calc2test',  () => {

    beforeEach (() => {
        cy.visit('https://web2.0calc.com')
        cy.get('#cookieconsentallowall').click()
    })

    it('should calculate 35*999+(100/4) ', () => {
    cy.get('#input').type('35')
    cy.get('#BtnMult').click()
    cy.get('#input').type('999')
    cy.get('#BtnPlus').click()
    cy.get('#BtnParanL').click()
    cy.get('#input').type('100')
    cy.get('#BtnDiv').click()
    cy.get('#input').type('4')
    cy.get('#BtnParanR').click()
    cy.get('#BtnCalc').click()
    cy.get('#hist > .dropdown-toggle').click()
    cy.get('.r').should('contain', '34990')
    })

    it('should calculate cos(pi)', () => { 
    cy.get('#BtnClear').click()
    cy.get('#trigorad').click()
    cy.get('#BtnCos').click()
    cy.get('#BtnPi').click()
    cy.get('#BtnCalc').click()
    cy.get('#hist > .dropdown-toggle').click()
    cy.get(':nth-child(1) > .r').should('contain', '-1')
    })

    it('should calculate sqrt(81)', () => {
    cy.get('#BtnClear').click()
    cy.get('#input').type('81')
    cy.get('#BtnSqrt').click()
    cy.get('#BtnCalc').click()
    cy.get('#hist > .dropdown-toggle').click()
    cy.get(':nth-child(1) > .r').should('contain', '9')
    })

    it('should check history dropdown assertion', () => {
    cy.get(':nth-child(2) > .r').should('contain', '-1')
    cy.get(':nth-child(3) > .r').should('contain', '34990')
    })

})
    