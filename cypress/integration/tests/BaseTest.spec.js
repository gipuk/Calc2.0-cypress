import {MainPage} from '../page-objects/mainPage'
import {CalcPage} from '../page-objects/calcPage'

describe ('Calc2test',  () => {

    const mainPage = new MainPage ()

    beforeEach (() => {
        mainPage.navigate()
    })

    it('should calculate') , () => {
    //calculate 35*999+(100/4)
    const calcPage = new CalcPage ()
    
    calcPage.input("35")
    calcPage.multiplbtn()
    calcPage.input("999")
    calcPage.plusbtn()
    calcPage.paranLbtn()
    calcPage.input("100")
    calcPage.divbtn()
    calcPage.input("4")
    calcPage.paranRbtn()
    calcPage.calcbtn()
    calcPage.histdrop()
    calcPage.getresult("first", '34990')
    

    //calculate cos(pi)
    calcPage.clearbtn()
    calcPage.trigobtn()
    calcPage.cosbtn()
    calcPage.pitbn()
    calcPage.calcbtn()
    calcPage.histdrop()
    cy.get(':nth-child(1) > .r').should('contain', '-1')
    

    //calculate sqrt(81)
    calcPage.clearbtn()
    calcPage.input("81")
    calcPage.sqrtbtn()
    calcPage.calcbtn()
    calcPage.histdrop()
    cy.get(':nth-child(1) > .r').should('contain', '9')
    

    //check history dropdown assertion
    cy.get(':nth-child(2) > .r').should('contain', '-1')
    cy.get(':nth-child(3) > .r').should('contain', '34990')
    }

})
    