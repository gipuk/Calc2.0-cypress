export class CalcPage{
    input (calctext) {
        cy.get('#input').type(calctext)
    }

    multiplbtn () {
        cy.get('#BtnMult').click()
    }

    plusbtn () {
        cy.get('#BtnPlus').click()
    }

    paranLbtn () {
        cy.get('#BtnParanL').click()
    }

    paranRbtn () {
        cy.get('#BtnParanR').click()
    }
    divbtn () {
        cy.get('#BtnDiv').click()

    }

    calcbtn () {
        cy.get('#BtnCalc').click()
    }

    clearbtn () {
        cy.get('#BtnClear').click()
    }

    trigobtn () {
        cy.get('#trigorad').click()
    }

    cosbtn () {
        cy.get('#BtnCos').click()
    }

    pitbn () {
        cy.get('#BtnPi').click()
    }

    sqrtbtn () {
        cy.get('#BtnSqrt').click()
    }

    histdrop () {
        cy.get('#hist > .dropdown-toggle').click()
    }

    /*getresult (operationType, result) {
        if (operationType === "first") {
            cy.get('.r').should('contain', result)
        
        } else {
            cy.get(':nth-child(1) > .r').should('contain', result)
        } 
    }*/
}