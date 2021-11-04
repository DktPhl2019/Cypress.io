import {datepick1,datepick2} from './myConst'
const x = require('./DateTime')
function mywait() {
    cy.wait(100)
}

function JQuery_Date_Picker(){
    cy.contains('Date pickers').click()
    mywait()
    cy.contains('JQuery Date Picker').click()
    mywait()
    cy.request('https://demo.seleniumeasy.com/jquery-date-picker-demo.html').then((response) => {expect(response.status).to.eq(200)})
    mywait()
    cy.get(datepick1).type('01/05/2015'+'{enter}')
    mywait()
    cy.get(datepick2).type('01/07/2017'+'{enter}')
    mywait()
    cy.writeFile('cypress/integration/testResults.txt', x.myDateTime() + ' '+'JQuery_Date_Picker passed'+'\n', { flag: 'a+' })
}
module.exports={JQuery_Date_Picker}