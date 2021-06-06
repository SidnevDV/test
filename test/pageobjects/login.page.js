const Page = require('./page');

class LoginPage extends Page {
  get txtEmail() { return $('[name="email"]') }
  get txtPassword() { return $('[name="password"]') }
  get btnSubmit() { return $('[type="submit"]') }

  async fillEmailField(email) {
    await (await this.txtEmail).setValue(email);
  }

  async fillPasswordField(password) {
    await (await this.txtPassword).setValue(password);
  }

  async clickLoginButton() {
    await (await this.btnSubmit).click();
  }

  async login(email, password) {
    await this.fillEmailField(email);
    await this.fillPasswordField(password);
    await this.clickLoginButton();
  }

  open() {
    return super.open('login');
  }
}

module.exports = new LoginPage();