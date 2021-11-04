import {tablePaginationNext,tablePaginationPrior} from './myConst'

const x = require('./DateTime')

function mywait() {
    cy.wait(100)
}

function Table_Pagination(){
    cy.contains('Table').click()
    mywait()
    cy.contains('Table Pagination').click()
    mywait()
    cy.request('https://demo.seleniumeasy.com/table-pagination-demo.html').then((response) => {expect(response.status).to.eq(200)})
    mywait()
    cy.get(tablePaginationNext).click()
    mywait()
    cy.get(tablePaginationPrior).click()
    mywait()
    cy.writeFile('cypress/integration/testResults.txt', x.myDateTime() + ' '+'Table_Pagination passed'+'\n', { flag: 'a+' })
}
module.exports={Table_Pagination}