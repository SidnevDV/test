const Page = require('./page');

class ContractsPage extends Page {
    get btnFixeRateContract() {
        return $('[href="/create/fixed"]')
    }

    async selectContractType(type) {
        switch (type) {
            case 'Fixed Rate':
                await (await this.btnFixeRateContract).click();
                break;
            default:
                alert(`${item} is not present in the list`);
        }
    }

}

module.exports = new ContractsPage();