const { config } = require('./wdio.shared.conf');

exports.config = {
  /**
   * base config
   */
  ...config,
  automationProtocol: 'devtools',
  /**
   * config for local testing
   */
  maxInstances: 1,
  services: [ 'chromedriver', 'geckodriver' ],
  capabilities: [
    {
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: process.argv.includes('--headless')
          ? [ '--headless', '--disable-gpu' ]
          : [],
      },
    },
    {
      browserName: 'firefox',
      acceptInsecureCerts: true,
      exclude: [
        'tests/e2e/specs/mocked-*.spec.js',
      ],
    },
  ],
};
