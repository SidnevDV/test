require('dotenv').config();

exports.config = {
  runner: 'local',
  specs: [
    './test/specs/contract/**.js'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: [
        '--no-sandbox',
        '--disable-infobars',
        '--disable-gpu',
        '--window-size=1920,1080'
      ],
    }
  }],
  bail: 0,
  baseUrl: 'https://dev.deel.wtf',
  waitforTimeout: 30000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  reporters: [['allure', {
    outputDir: 'allure-results'
  }]],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 90000
  }
}