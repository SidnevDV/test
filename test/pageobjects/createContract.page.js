const Page = require('./page');

class CreateContractsPage extends Page {
    get txtContractName() { return $('[name="name"]') }
    get txtContractScope() { return $('[name="scope"]') }
    get selectDate() { return $('[name="effectiveDate"]') }
    get btnNext() { return $('.button[theme="primary"]') }
    get txtRate() {return $('[name="rate"]') }
    get txtCurrency() {return $('[data-qa="currency-select"] .select__single-value') }
    get txtPer() {return $('[data-qa="cycle-select"] .select__control') }
    get btnAddASpecialClause() {return $('[data-qa="special-clause-card"] button') }
    get txtSpecialClause() {return $('[data-qa="special-clause-card"] textarea') }
    get txtContractorCountry() {return $('[data-qa="contractor-tax-residence"] .select__control') }
    get txtContractorState() {return $('[data-qa="contractor-tax-residence-province"] .select__control') }

    async fillContractName(name) {
        await (await this.txtContractName).setValue(name);
    }

    async fillContractScope(scope) {
        await (await this.txtContractScope).setValue(scope);
    }

    async selectContractDate(date) {
        await (await this.selectDate).click();
        await (await $(`[aria-label="${date}"]`)).click();
    }

    async fillRate(rate) {
        await (await this.txtRate).setValue(rate);
    }

    async selectCurrency(currency) {
        await (await this.txtCurrency).click();
        await (await $(`div=${currency}`)).click();
    }

    async selectPer(per) {
        await (await this.txtPer).click();
        await (await $(`div=${per}`)).click();
    }

    async addSpecialClause(value) {
        await (await this.btnAddASpecialClause).click()
        await (await this.txtSpecialClause).setValue(value);
    }

    async selectContractorCountry(country) {
        await (await this.txtContractorCountry).click();
        await (await $(`div=${country}`)).click();
    }

    async selectContractorState(state) {
        await (await this.txtContractorState).click();
        await (await $(`div=${state}`)).click();
    }

    async clickNext() {
        await (await (await this.btnNext).waitForClickable());
        await (await this.btnNext).click();
    }

    async createContract(contract) {
        await this.fillContractName(contract["name"]);
        await this.fillContractScope(contract["scopeOfWork"]);
        await this.selectContractDate(contract["contractStartDate"].format('D MMMM YYYY'));
        await this.clickNext();
        await this.fillRate(contract["rate"])
        await this.selectCurrency(contract["currency"])
        await this.selectPer(contract["per"])
        await this.clickNext();
        await this.clickNext();
        await this.addSpecialClause(contract["specialClause"])
        await this.clickNext();
        await this.selectContractorCountry(contract["contractorCountry"])
        await this.selectContractorState(contract["contractorState"])
        await this.clickNext();
    }
}

module.exports = new CreateContractsPage();