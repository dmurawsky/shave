const assert = require('assert')
const { Chromeless } = require('chromeless')

const chromeless = new Chromeless()

const firstName = 'Testy'
const lastName = 'Test'
const email = 'test' + Date.now() + '@dmurawsky.com'
const password = 'testpass'


describe('Sign Up Page', function() {
  it('should load a signup form', function(done) {
    chromeless.goto('http://localhost:3000/sign-up')
      .exists('#signUpForm')
      .then(exists => {
        assert.equal(true, exists)
        done()
      }).catch(done)
  })
  it('should create and sign in user', function(done) {
    chromeless.goto('http://localhost:3000/sign-up')
      .click('#signOutBtn')
      .wait('#signUpBtn')
      .type(firstName, 'input[name="firstName"]')
      .type(lastName, 'input[name="lastName"]')
      .type(email, 'input[name="email"]')
      .type(email, 'input[name="confirmEmail"]')
      .type(password, 'input[name="password"]')
      .type(password, 'input[name="confirmPassword"]')
      .click('#submitBtn')
      .wait('#hey')
      .evaluate(() => {
        return document.getElementById('hey').innerText
      })
      .click('#deleteUserBtn')
      .wait('#signUpBtn')
      .then(heyText => {
        assert.equal(heyText, 'Hey ' + firstName)
        chromeless.end()
        done()
      }).catch(done)
  })
})
