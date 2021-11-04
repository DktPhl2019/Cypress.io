import {myinput, inp1, btn1, msg1,num1,num2,getTotal,numSum,num1value,num2value} from './myConst'

const x = require('./DateTime')

function mywait() {
  cy.wait(100)
}

function Simple_Form_Demo(){
  cy.contains('Input Forms').click()
  mywait()
  cy.contains('Simple Form Demo').click()
  mywait()
  cy.request('https://demo.seleniumeasy.com/basic-first-form-demo.html').then((response) => {
    expect(response.status).to.eq(200)
  })
  mywait()
  cy.get(inp1).should('be.empty')
  cy.get(inp1).type(myinput)
  mywait()
  cy.get(btn1).click()
  mywait()
  cy.get(msg1).contains(myinput)
  mywait()
  cy.get(num1).type(num1value)
  mywait()
  cy.get(num2).type(num2value)
  mywait()
  cy.get(getTotal).click()
  mywait()
  cy.get(numSum).contains(num1value+num2value)
  mywait()
  cy.writeFile('cypress/integration/testResults.txt', x.myDateTime() + ' '+'Simple_Form_Demo passed'+'\n', { flag: 'a+' })
}
module.exports = {Simple_Form_Demo}
