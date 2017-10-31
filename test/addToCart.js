const assert = require('assert')
const { Chromeless } = require('chromeless')

const chromeless = new Chromeless()

after(function() { chromeless.end() })

describe('Add To Cart', function() {
  it('should add 1 item to cart', function(done) {
    chromeless.goto('http://localhost:3000/results')
      .wait('.add-to-cart-btn')
      .evaluate(() => {
        const btns = document.querySelectorAll('.add-to-cart-btn')
        btns[0].click()
      })
      .evaluate(() => {
        return document.getElementById('cartCount').innerText
      })
      .then(count => {
        assert.equal(1, count)
        done()
      }).catch(done)
  })
})
