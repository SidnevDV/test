const { addFeature } = require('@wdio/allure-reporter').default;
const LoginPage = require('../../pageobjects/login.page');
const DashboardPage = require('../../pageobjects/dashboard.page');
const ContractsPage = require('../../pageobjects/contracts.page');
const CreateContractPage = require('../../pageobjects/createContract.page');
const ContractDetailsPage = require('../../pageobjects/contractDetails.page');
const contractData = require('../../test_data/contracts/index');
const userData = require('../../test_data/users/index');

describe('create fixed contract', () => {
  it('should create a fixed contract', async () => {
    addFeature('should create a fixed contract');

    let fixedContract = contractData.contracts.fixedContract

    // Open Login page
    await LoginPage.open();

    // Login
    await LoginPage.login(userData['user']['email'], userData['user']['password']);

    // Open "Contracts" page
    await DashboardPage.clickMenuItem('Create a Contract');

    // Select Contract Type
    await ContractsPage.selectContractType(fixedContract["type"]);

    // Create the "Fixed Rate" contract
    await CreateContractPage.createContract(fixedContract)

    // Check Details of the Created Contract
    await ContractDetailsPage.checkContractDetails(fixedContract)
  });

});