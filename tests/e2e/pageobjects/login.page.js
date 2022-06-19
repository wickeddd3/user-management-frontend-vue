const Page = require('./base.page');

class Login extends Page {
  constructor () {
    super({
      title: 'Sign in to VueApp',
      url: '/oauth2/authorization',
      container: 'body > div',
    });
  }

  get logo () { return $('#brand-logo'); }

  get email () { return $('input#username[type=text]'); }

  get password () { return $('input#password'); }

  get loginButton () { return $('input#kc-login[type=submit]'); }

  async login ({ email, password } = {
    email: 'test@test.com',
    password: 'password',
  }) {
    await (await this.email).setValue(email);
    await (await this.password).setValue(password);
    await (await this.loginButton).click();
  }

  async loginOptionally () {
    try {
      if (await this.active) {
        await this.login();
      }
    } catch (error) {
      console.warn('not in login page. skipping login...');
    }
  }
}

module.exports = new Login();
