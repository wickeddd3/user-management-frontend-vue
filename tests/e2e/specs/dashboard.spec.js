// const App = require('../pageobjects/app.page');

// describe('Vue.js app', () => {
//   it('should open and render', () => {
//     App.open();
//     expect(App.heading).toHaveText('Welcome to Your Vue.js App');
//   });
// });

const Dashboard = require('../pageobjects/dashboard.page');
// const Login = require('../pageobjects/login.page');

describe('dashboard', () => {
  before(async () => {
    await browser.setWindowSize(1280, 1024);
  });

  it('should open and render', async () => {
    await Dashboard.open();
    // await Login.loginOptionally();
    await Dashboard.ready;
  });

  it('should show correct title', async () => {
    await expect(await Dashboard.title).toHaveText('Dashboard');
  });
});
