// CSS selectors for all elements
//Simple Form Demo screen
const inp1 = '.form-group > #user-message'
const btn1 = '#get-input > .btn'
const msg1 = '#display'
const myinput = "Enter text"
const num1 = '#sum1'
const num2 = '#sum2'
const num1value = 1000
const num2value = 2000
const getTotal = '#gettotal > .btn'
const numSum = '#displayvalue'
const mycheckbox = '#isAgeSelected'
const checkboxmsg = '#txtAge'
const checkbox1 = ':nth-child(3) > label > .cb1-element'
const checkbox2 = ':nth-child(4) > label > .cb1-element'
const checkbox3 = ':nth-child(5) > label > .cb1-element'
const checkbox4 = ':nth-child(6) > label > .cb1-element'
const AllCheckBox = '#check1'
const radio1 = '.panel-body > :nth-child(2) > input'
const radio2 = '.panel-body > :nth-child(3) > input'
const getCheckValue = '#buttoncheck'
const getCheckValueResult = '.radiobutton'
const sexmaleoption = '.panel-body > :nth-child(2) > :nth-child(2) > input'
const sexfemaleoption = '.panel-body > :nth-child(2) > :nth-child(3) > input'
const age1option = ':nth-child(3) > :nth-child(2) > input'
const age2option = ':nth-child(3) > :nth-child(3) > input'
const age3option = ':nth-child(4) > input'
const getValues = '.panel-body > .btn'
const getValuesResult = '.groupradiobutton'
const getCheckValueText1 = 'Radio button ' + "'Male'" + ' is checked'
const getCheckValueText2 = 'Radio button ' + "'Female'" + ' is checked'
const getValuesResultText1 = 'Sex : Male Age group: 0 - 5'
const getValuesResultText2 = 'Sex : Male Age group: 5 - 15'
const getValuesResultText3 = 'Sex : Male Age group: 15 - 50'
const getValuesResultText4 = 'Sex : Female Age group: 0 - 5'
const getValuesResultText5 = 'Sex : Female Age group: 5 - 15'
const getValuesResultText6 = 'Sex : Female Age group: 15 - 50'
const mydropdown = '#select-demo'
const mydropdownselectedvalue ='.selected-value'
const button1 = '#printMe'
const button2 = '#printAll'
const selectionarea = '#multi-select'
const selectionResult ='.getall-selected'
const firstName = ':nth-child(2) > .inputGroupContainer > .input-group > .form-control'
const lastName = ':nth-child(3) > .inputGroupContainer > .input-group > .form-control'
const email = ':nth-child(4) > .inputGroupContainer > .input-group > .form-control'
const phone = ':nth-child(5) > .inputGroupContainer > .input-group > .form-control'
const address = ':nth-child(6) > .inputGroupContainer > .input-group > .form-control'
const city = ':nth-child(7) > .inputGroupContainer > .input-group > .form-control'
const state ='.selectContainer > .input-group > .form-control' 
const zipCode = ':nth-child(9) > .inputGroupContainer > .input-group > .form-control'
const websiteDomain = ':nth-child(10) > .inputGroupContainer > .input-group > .form-control'
const doYouHaveHostingYes = ':nth-child(1) > label > input'
const doYouHaveHostingNo = ':nth-child(2) > label > input'
const projectDescription = ':nth-child(12) > .inputGroupContainer > .input-group > .form-control'
const send = '.btn'
const myname = '#title'
const mycomment = '#description'
const mySubmitButton = '#btn-submit'
const mySubmitMessage = '#submit-control'
const selectCountry = ':nth-child(2) > .panel > .panel-body > .select2 > .selection > .select2-selection'
const selectCountrySearchField = '.select2-dropdown > .select2-search > .select2-search__field'
const selectState = '.select2-search__field'
const selectUSTerritories = ':nth-child(4) > .panel > .panel-body'
const searchUSTerritories = '.select2-dropdown > .select2-search > .select2-search__field'
const selectFile = '#files'
const date1='#sandbox-container1 > .input-group > .form-control'
const daterange1='[placeholder="Start date"]'
const daterange2='[placeholder="End date"]'
const datepick1='#from'
const datepick2='#to'
const tablePaginationNext='.next_link'
const tablePaginationPrior='.prev_link'
const taskSearch = '#task-table-filter'
const userFilter = '.btn' 
const userNumber = ':nth-child(1) > .form-control'
const userName = '.filters > :nth-child(2) > .form-control'
const userFirstName = ':nth-child(3) > .form-control'
const userLastName = ':nth-child(4) > .form-control'
const greenButton='.btn-success'
const orangeButton='.btn-warning'
const redButton='.btn-danger'
const allButton='.btn-default'
const entriesNumberShow='select'
const mySearch='input'
const Asc='.sorting_asc'
const Desc='.sorting_desc'
const sortName ='[aria-label="Name: activate to sort column ascending"]'
const sortPosition = '[aria-label="Position: activate to sort column ascending"]'
const sortOffice='[aria-label="Office: activate to sort column ascending"]'
const sortAge='[aria-label="Age: activate to sort column ascending"]'
const sortDate='[aria-label="Start date: activate to sort column ascending"]'
const sortSalary='[aria-label="Salary: activate to sort column ascending"]'
const pageNext='#example_next'
const pagePrior='#example_previous'

export {
    inp1, 
    btn1, 
    msg1, 
    myinput,
    num1, 
    num2, 
    num1value,
    num2value, 
    getTotal,
    numSum,
    mycheckbox,
    checkboxmsg,
    checkbox1,
    checkbox2,
    checkbox3,
    checkbox4,
    AllCheckBox,
    radio1,
    radio2,
    getCheckValue,
    getCheckValueResult,
    getCheckValueText1,
    getCheckValueText2,
    sexmaleoption,
    sexfemaleoption,
    age1option,
    age2option,
    age3option,
    getValues,
    getValuesResult,
    getValuesResultText1,
    getValuesResultText2,
    getValuesResultText3,
    getValuesResultText4,
    getValuesResultText5,
    getValuesResultText6,
    mydropdown,
    mydropdownselectedvalue,
    button1,
    button2,
    selectionarea,
    selectionResult,
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
    send,
    myname,
    mycomment,
    mySubmitButton,
    mySubmitMessage,
    selectCountry,
    selectCountrySearchField,
    selectState,
    selectUSTerritories,
    searchUSTerritories,
    selectFile,
    date1,
    daterange1,
    daterange2,
    datepick1,
    datepick2,
    tablePaginationNext,
    tablePaginationPrior,
    taskSearch,
    userFilter, 
    userNumber,
    userName,
    userFirstName,
    userLastName,
    greenButton,
    orangeButton,
    redButton,
    allButton,
    entriesNumberShow,
    mySearch,
    Asc,
    Desc,
    sortName,
    sortPosition,
    sortOffice,
    sortAge,
    sortDate,
    sortSalary,
    pageNext,
    pagePrior
}