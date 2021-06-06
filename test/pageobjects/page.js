require('dotenv').config();

module.exports = class Page {
  open(path) {
    return browser.url(path)
  }
}