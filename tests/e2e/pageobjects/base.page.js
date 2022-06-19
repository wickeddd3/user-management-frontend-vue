const waitUntilOptions = {
  timeout: 30000,
  timeoutMsg: 'expected to load within 10s',
};

module.exports = class Page {
  constructor ({
    title, url, container, expectation,
  }) {
    this.title = title;
    this.url = url;
    this._container = container;
    this._expectation = expectation || {};
  }

  get container () {
    return $(this._container);
  }

  get ready () {
    return this.waitUntil(async () => {
      const displayed = await (await this.container).isDisplayed();
      const currentTitle = await browser.getTitle();
      return displayed && (currentTitle === this.title);
    });
  }

  get exist () {
    return this.waitUntil(async () => {
      const displayed = await (await this.container).isExisting();
      const currentTitle = await browser.getTitle();
      return displayed && (currentTitle === this.title);
    });
  }

  get active () {
    return this.waitUntil(async () => (await browser.getTitle()) === this.title);
  }

  open (path = this.url) {
    return browser.url(path);
  }

  waitUntil (condition) {
    return browser.waitUntil(condition, waitUntilOptions);
  }

  setupExpectation () {
    expect.extend(this._expectation);
  }
};
