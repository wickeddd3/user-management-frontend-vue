// eslint-disable-next-line max-classes-per-file
const Page = require('./base.page');
// const BaseComponent = require('./base.component');

// class Body extends BaseComponent {
//   constructor (element) {
//     super({ element });
//   }

//   get title () {
//     return this.container.then(element => element.$('[data-test="body:title"]'));
//   }
// }

class Dashboard extends Page {
  constructor () {
    super({
      title: 'Dashboard | VueApp',
      url: '/dashboard',
      container: '.v-page-dashboard',
    });
  }

  get title () {
    return this.container.then(element => element.$('h1'));
  }

  // get body () {
  //   return this.container.then(element => element.$('[data-test="section:main"]'))
  //     .then(element => new Body(element));
  // }
}

module.exports = new Dashboard();
