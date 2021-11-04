import {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zipCode,
    websiteDomain,
    doYouHaveHostingYes, 
    doYouHaveHostingNo,
    projectDescription,
    send
} from './myConst'

const x = require('./DateTime')

function mywait() {
    cy.wait(100)
}

function Input_Form_Submit(){
    cy.contains('Input Forms').click()
    mywait()
    cy.contains('Input Form Submit').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
    mywait()
    cy.request('https://demo.seleniumeasy.com/input-form-demo.html').then((response) => {expect(response.status).to.eq(200)})
    mywait()
    cy.get(firstName).type('John')
    mywait()
    cy.get(lastName).type('Walsh')
    mywait()
    cy.get(email).type('john.walsh@test.com')
    mywait()
    cy.get(phone).type('12679999191')
    mywait()
    cy.get(address).type('111 Market Street')
    mywait()
    cy.get(city).type('Philadelphia')
    mywait()
    cy.get(state).select('Pennsylvania')
    mywait()
    cy.get(zipCode).type('19106')
    mywait()
    cy.get(websiteDomain).type('www.test.com')
    mywait()
    cy.get(doYouHaveHostingYes).click()
    mywait()
    cy.get(projectDescription).type('Simple Test')
    mywait()
    cy.get(send).click()
    mywait()
    cy.writeFile('cypress/integration/testResults.txt', x.myDateTime() + ' '+'Input_Form_Submit passed'+'\n', { flag: 'a+' })
}
module.exports={Input_Form_Submit}