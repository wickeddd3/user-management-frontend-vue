const waitUntilOptions = {
  timeout: 15000,
  timeoutMsg: 'expected to load within 15s',
};

module.exports = class BaseComponent {
  constructor ({ container, expectation }) {
    this._container = container;
    this._expectation = expectation || {};
  }

  get container () {
    return $(this._container);
  }

  get ready () {
    return this.waitUntil(async () => {
      const displayed = await (await this.container).isDisplayed();
      return displayed;
    });
  }

  waitUntil (condition) {
    return browser.waitUntil(condition, waitUntilOptions);
  }

  setupExpectation () {
    expect.extend(this._expectation);
  }
};
