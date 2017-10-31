const assert = require('assert')
const { Chromeless } = require('chromeless')

const chromeless = new Chromeless()

const firstName = 'Mocha'
const email = 'mocha_test_user@dmurawsky.com'
const password = 'testpass'

after(function() { chromeless.end() })

describe('Sign In Page', function() {
  it('should load a signin form', function(done) {
    chromeless
      .goto('http://localhost:3000/sign-in')
      .exists('#signInForm')
      .then(exists => {
        assert.equal(true, exists)
        done()
      }).catch(done)
  })
  it('should sign in user', function(done) {
    chromeless.goto('http://localhost:3000/sign-in')
      .type(email, 'input[name="email"]')
      .type(password, 'input[name="password"]')
      .click('#signInBtn')
      .wait('#hey')
      .evaluate(() => {
        return document.getElementById('hey').innerText
      })
      .then(heyText => {
        assert.equal(heyText, 'Hey ' + firstName)
        done()
      }).catch(done)
  })
})
