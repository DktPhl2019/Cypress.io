const A1 = require('./Simple_Form_Demo')
const A2 = require('./CheckBox_Demo')
const A3 = require('./Radio_Buttons_Demo')
const A4 = require('./Select_Dropdown_List')
const A5 = require('./Input_Form_Submit')
const A6 = require('./Ajax_Form_Submit')
const A7 = require('./JQuery_Select_dropdown')
const A8 = require('./Bootstrap_Date_Picker')
const A9 = require('./JQuery_Date_Picker')
const A10 = require('./Table_Pagination')
const A11 = require('./Table_Data_Search')
const A12 = require('./Table_Filter')
const A13 = require('./Table_Sort_Search')

describe('Nav Menus', () => {
  context('1080p resolution', () => {
    beforeEach(() => {
      cy.viewport(1920,1080)
})
})
})

function mywait() {
  cy.wait(100)
}

function PrelimSetup(){
  cy.visit('http://demo.seleniumeasy.com/')
  mywait()
  cy.title().should('eq', 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online')
  mywait()
  const closepopup = '.at-cm-no-button'
  mywait()
  cy.get(closepopup).click()
  mywait()
}

describe('My FirstTest', function() {
  it('Open Store', function() {
    PrelimSetup()
    A1.Simple_Form_Demo()
    A2.CheckBox_Demo()
    A3.Radio_Buttons_Demo()
    A4.Select_Dropdown_List()
    A5.Input_Form_Submit()
    A6.Ajax_Form_Submit()
    A7.JQuery_Select_dropdown()
    A8.Bootstrap_Date_Picker()
    A9.JQuery_Date_Picker()
    A10.Table_Pagination()
    A11.Table_Data_Search()
    A12.Table_Filter()
    A13.Table_Sort_Search()
    
})
})
