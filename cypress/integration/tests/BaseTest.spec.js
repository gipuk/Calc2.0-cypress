import {MainPage} from '../page-objects/mainPage'
import {CalcPage} from '../page-objects/calcPage'

describe ('Calc2test',  () => {

    const mainPage = new MainPage ()

    beforeEach (() => {
        mainPage.navigate()
    })

    it('should calculate) ', () => {
    //calculate 35*999+(100/4)
    const calcPage = new CalcPage ()
    
    calcPage.input("35")
    calcPage.multiplbtn()
    calcPage.input("999")
    calcPage.plusbtn()
    calcPage.paranLbtn()
    calcPage.input("100")
   
    cy.get('#BtnDiv').click()
    cy.get('#input').type('4')
    cy.get('#BtnParanR').click()
    cy.get('#BtnCalc').click()
    cy.get('#hist > .dropdown-toggle').click()
    cy.get('.r').should('contain', '34990')
    

    //calculate cos(pi)
    cy.get('#BtnClear').click()
    cy.get('#trigorad').click()
    cy.get('#BtnCos').click()
    cy.get('#BtnPi').click()
    cy.get('#BtnCalc').click()
    cy.get('#hist > .dropdown-toggle').click()
    cy.get(':nth-child(1) > .r').should('contain', '-1')
    

    //calculate sqrt(81)
    cy.get('#BtnClear').click()
    cy.get('#input').type('81')
    cy.get('#BtnSqrt').click()
    cy.get('#BtnCalc').click()
    cy.get('#hist > .dropdown-toggle').click()
    cy.get(':nth-child(1) > .r').should('contain', '9')
    

    //check history dropdown assertion
    cy.get(':nth-child(2) > .r').should('contain', '-1')
    cy.get(':nth-child(3) > .r').should('contain', '34990')
    })

})
    