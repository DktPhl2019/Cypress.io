import {greenButton,orangeButton,redButton,allButton} from './myConst'

const x = require('./DateTime')

function mywait() {
    cy.wait(100)
}

function Table_Filter(){
    cy.contains('Table').click()
    mywait()
    cy.contains('Table Filter').click()
    mywait()
    cy.request('https://demo.seleniumeasy.com/table-records-filter-demo.html').then((response) => {expect(response.status).to.eq(200)})
    mywait()
    cy.get(greenButton).click()
    mywait()
    cy.get(orangeButton).click()
    mywait()
    cy.get(redButton).click()
    mywait()
    cy.get(allButton).click()
    mywait()
    cy.writeFile('cypress/integration/testResults.txt', x.myDateTime() + ' '+'Table_Filter passed'+'\n', { flag: 'a+' })
}
module.exports={Table_Filter}