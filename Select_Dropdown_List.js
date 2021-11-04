import {mydropdown,mydropdownselectedvalue,selectionarea,button1,button2} from './myConst'

const x = require('./DateTime')

function mywait() {
    cy.wait(100)
}

function Select_Dropdown_List(){
    cy.contains('Input Forms').click()
    mywait()
    cy.contains('Select Dropdown List').click()
    mywait()
    cy.request('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html').then((response) => {
        expect(response.status).to.eq(200)
    })
    mywait()
    cy.get(mydropdown).select('Tuesday')
    mywait()
    cy.get(mydropdownselectedvalue).contains('- Tuesday')
    mywait()
    cy.get(selectionarea).select(['California', 'New Jersey', 'Pennsylvania', 'Washington'])
    mywait()
    cy.get(button1).click()
    mywait()
    cy.get(button2).click()
    mywait()
    cy.writeFile('cypress/integration/testResults.txt', x.myDateTime() + ' '+'Select_Dropdown_List passed'+'\n', { flag: 'a+' })
}
module.exports={Select_Dropdown_List}