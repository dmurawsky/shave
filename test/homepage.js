const assert = require('assert')
const { Chromeless } = require('chromeless')

const chromeless = new Chromeless()

after(function() { chromeless.end() })

describe('Homepage', function() {
  describe('Sign Up Button', function() {
    it('should load', function(done) {
      chromeless.goto('http://localhost:3000/')
        .exists('#signUpBtn')
        .then(exists => {
          assert.equal(true, exists)
          done()
        }).catch(done)
    })
    it('should navigate to /sign-up', function(done) {
      chromeless.goto('http://localhost:3000/')
        .click('#signUpBtn')
        .wait('#signUpForm')
        .exists('#signUpForm')
        .then(exists => {
          assert.equal(true, exists)
          done()
        }).catch(done)
    })
  })
})
