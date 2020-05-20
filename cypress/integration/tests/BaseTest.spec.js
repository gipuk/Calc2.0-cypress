import {MainPage} from '../page-objects/mainPage'
import {CalcPage} from '../page-objects/calcPage'

describe ('Calc2test' ,  () => {

    const mainPage = new MainPage ()

    beforeEach (() => {
        mainPage.navigate()
    })

    it('should calculate' , () => {
    //calculate 35*999+(100/4)
    const calcPage = new CalcPage ()
    calcPage.multiply('35', '999')
    calcPage.divide('100','4')
    calcPage.calcResult()
    calcPage.getResult("first", '34990')  
    //calculate cos(pi)
    calcPage.calcCosPi()
    calcPage.calcResult()
    calcPage.getResult("second", '-1') 
    //calculate sqrt(81)
    calcPage.calcSqrt('81')
    calcPage.calcResult()
    calcPage.getResult("second", '9') 
    //history dropdown assertion
    //calcPage.allResults('9','-1','34990')
    calcPage.getResult1('-1')
    calcPage.getResult2('34990')
    //plus 35
    calcPage.plus35()
    calcPage.calcResult()
    calcPage.getResult("second", '114')
    })
})