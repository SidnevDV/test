const Page = require('./page');

class DashboardPage extends Page {
    get createContract() {
        return $('[href="/create"]')
    }

    get btnClosePopup() {
        return $('.button-close')
    }

    async closePopup() {
        try {
            await (await this.btnClosePopup).waitForDisplayed({timeout: 5000})
            await (await this.btnClosePopup).click()
        } catch (error) {
            console.log('Popup is not visible');
        }
    }

    async clickMenuItem(item) {
        await this.closePopup()
        switch (item) {
            case 'Create a Contract':
                await (await this.createContract).click();
                break;
            default:
                alert(`${item} is not present in the list`);
        }
    }

}

module.exports = new DashboardPage();