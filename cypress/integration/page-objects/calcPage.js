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
}