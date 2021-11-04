import {
    radio1, 
    radio2,
    getCheckValue, 
    getCheckValueResult,
    getCheckValueText1,
    getCheckValueText2,
    getValuesResultText1,
    getValuesResultText2,
    getValuesResultText3,
    getValuesResultText4,
    getValuesResultText5,
    getValuesResultText6,
    sexmaleoption,
    sexfemaleoption,
    age1option,
    age2option,
    age3option,
    getValues,
    getValuesResult
} from './myConst'

const x = require('./DateTime')

function mywait() {
    cy.wait(100)
}

function Radio_Buttons_Demo(){
    cy.contains('Input Forms').click()
    mywait()
    cy.contains('Radio Buttons Demo').click()
    mywait()
    cy.request('https://demo.seleniumeasy.com/basic-radiobutton-demo.html').then((response) => {
        expect(response.status).to.eq(200)
    })
    mywait()
    cy.get(radio1).check()
    mywait()
    cy.get(getCheckValue).click()
    mywait()
    cy.get(getCheckValueResult).contains(getCheckValueText1)
    mywait()
    cy.get(radio2).check()
    mywait()
    cy.get(getCheckValue).click()
    mywait()
    cy.get(getCheckValueResult).contains(getCheckValueText2)
    mywait()
    cy.get(sexmaleoption).click()
    mywait()
    cy.get(age1option).click()
    mywait()
    cy.get(getValues).click()
    mywait()
    cy.get(getValuesResult).contains(getValuesResultText1)
    mywait()
    cy.get(age2option).click()
    mywait()
    cy.get(getValues).click()
    mywait()
    cy.get(getValuesResult).contains(getValuesResultText2)
    mywait()
    cy.get(age3option).click()
    mywait()
    cy.get(getValues).click()
    mywait()
    cy.get(getValuesResult).contains(getValuesResultText3)
    mywait()
    cy.get(sexfemaleoption).click()
    mywait()
    cy.get(age1option).click()
    mywait()
    cy.get(getValues).click()
    mywait()
    cy.get(getValuesResult).contains(getValuesResultText4)
    mywait()
    cy.get(age2option).click()
    mywait()
    cy.get(getValues).click()
    mywait()
    cy.get(getValuesResult).contains(getValuesResultText5)
    mywait()
    cy.get(age3option).click()
    mywait()
    cy.get(getValues).click()
    mywait()
    cy.get(getValuesResult).contains(getValuesResultText6)
    mywait()
    cy.writeFile('cypress/integration/testResults.txt', x.myDateTime() + ' '+'Radio_Buttons_Demo passed' +'\n', { flag: 'a+' })
}
module.exports={Radio_Buttons_Demo}