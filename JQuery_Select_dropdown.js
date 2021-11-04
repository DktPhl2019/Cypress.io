import {selectCountry,selectCountrySearchField,selectState,selectUSTerritories,searchUSTerritories,selectFile} from './myConst'

const x = require('./DateTime')

function mywait() {
    cy.wait(100)
}

function JQuery_Select_dropdown(){
    cy.contains('Input Forms').click()
    mywait()
    cy.contains('JQuery Select dropdown').click()
    mywait()
    cy.request('https://demo.seleniumeasy.com/jquery-dropdown-search-demo.html').then((response) => {expect(response.status).to.eq(200)})
    mywait()
    cy.get(selectCountry).click()
    mywait()
    cy.get(selectCountrySearchField).type('United States of America')
    mywait()
    cy.get(selectCountrySearchField).type('{enter}')
    mywait()
    cy.get(selectState).type('California'+'{enter}')
    mywait()
    cy.get(selectState).type('New Jersey'+'{enter}')
    mywait()
    cy.get(selectState).type('Pennsylvania'+'{enter}')
    mywait()
    cy.get(selectState).type('Washington'+'{enter}')
    mywait()
    cy.get(selectUSTerritories).click()
    mywait()
    cy.get(searchUSTerritories).type('Puerto Rico'+'{enter}')
    mywait()
    cy.get(selectFile).select('Java')
    mywait()
    cy.writeFile('cypress/integration/testResults.txt', x.myDateTime() + ' '+'JQuery_Select_dropdown passed'+'\n', { flag: 'a+' })
}
module.exports={JQuery_Select_dropdown}