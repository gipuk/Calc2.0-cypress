export class CalcPage{

    input (calctext) {
        cy.get('#input').type(calctext)
    }

    multiplBtn () {
        cy.get('#BtnMult').click()
    }

    plusBtn () {
        cy.get('#BtnPlus').click()
    }

    minusBtn () {
        cy.get('#BtnMinus').click()
    }

    paranLBtn () {
        cy.get('#BtnParanL').click()
    }

    paranRBtn () {
        cy.get('#BtnParanR').click()
    }
    divBtn () {
        cy.get('#BtnDiv').click()

    }

    calcBtn () {
        cy.get('#BtnCalc').click()
    }

    clearBtn () {
        cy.get('#BtnClear').click()
    }

    trigoBtn () {
        cy.get('#trigorad').click()
    }

    cosBtn () {
        cy.get('#BtnCos').click()
    }

    pitBtn () {
        cy.get('#BtnPi').click()
    }

    sqrtBtn () {
        cy.get('#BtnSqrt').click()
    }

    histDrop () {
        cy.get('#hist > .dropdown-toggle').click()
    }

    getResult (operationType, result) {
        if (operationType === "first") {
            cy.get('.r').should('contain', result)
        
        } else {
            cy.get(':nth-child(1) > .r').should('contain', result)
        } 
    }

    getResult1 (resultText1) {
        cy.get(':nth-child(2) > .r').should('contain', resultText1)
    }

    getResult2 (resultText2) {
        cy.get(':nth-child(3) > .r').should('contain', resultText2)
    }

    plusTwoNumber(firstNumber){
        this.plusBtn()
        this.input(firstNumber)
        this.plusBtn()

    }

    multiply (firstNo, secondNo) {
        this.input(firstNo)
        this.multiplBtn()
        this.input(secondNo)
        this.plusBtn()
        this.paranLBtn()
    }

    divide (firstNo, secondNo) {
        this.input(firstNo)
        this.divBtn()
        this.input(secondNo)
        this.paranRBtn()
    }

    calcResult (result) {
        this.calcBtn()
        this.histDrop()
    }

    calcCosPi () {
        this.clearBtn()
        this.trigoBtn()
        this.cosBtn()
        this.pitBtn()
    }

    calcSqrt (firstNo) {
        this.clearBtn()
        this.input(firstNo)
        this.sqrtBtn()

    }

    allResults (result, resultText1, resultText2) {
        this.histDrop()
        this.getResult(result)
        this.getResult1(resultText1)
        this.getResult2(resultText2)
    }

    plus35 () {
        let i = 0
    for (i = 0; i<3; i++) {
        this.plusTwoNumber("35")
    }  
    }
}