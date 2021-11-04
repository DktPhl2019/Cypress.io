import { myname, mycomment, mySubmitButton, mySubmitMessage } from "./myConst"

const x = require('./DateTime')

function mywait() {
    cy.wait(100)
}

function Ajax_Form_Submit(){
    cy.contains('Input Forms').click()
    mywait()
    cy.contains('Ajax Form Submit').click()
    mywait()
    cy.request('https://demo.seleniumeasy.com/ajax-form-submit-demo.html').then((response) => {expect(response.status).to.eq(200)})
    mywait()
    cy.get(myname).type('My Test')
    mywait()
    cy.get(mycomment).type('This a very long description')
    mywait()
    cy.get(mySubmitButton).click()
    mywait()
    cy.get(mySubmitMessage).contains('Form submited Successfully!')
    mywait()
    cy.writeFile('cypress/integration/testResults.txt', x.myDateTime() + ' '+'Ajax_Form_Submit passed'+'\n', { flag: 'a+' })
}
module.exports={Ajax_Form_Submit}