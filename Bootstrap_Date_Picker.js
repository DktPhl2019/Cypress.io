import {date1,daterange1, daterange2} from './myConst'
const x = require('./DateTime')
function mywait() {
    cy.wait(100)
}

function Bootstrap_Date_Picker(){
    cy.contains('Date pickers').click()
    mywait()
    cy.contains('Bootstrap Date Picker').click()
    mywait()
    cy.request('https://demo.seleniumeasy.com/bootstrap-date-picker-demo.html').then((response) => {expect(response.status).to.eq(200)})
    mywait()
    cy.get(date1).type('06/01/2021'+'{enter}')
    mywait()
    cy.get(daterange1).type('01/05/2020'+'{enter}')
    mywait()
    cy.get(daterange2).type('01/06/2021'+'{enter}')
    mywait()
    cy.writeFile('cypress/integration/testResults.txt', x.myDateTime() + ' '+'Bootstrap_Date_Picker passed'+'\n', { flag: 'a+' })
}
module.exports={Bootstrap_Date_Picker}