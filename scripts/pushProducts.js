const { initializeApp, database } = require('firebase')
const products = require('./products.json')

initializeApp({
  apiKey: 'AIzaSyAtLrsgz5zdjLDbQ-RO58IJLk0jF5vDQVw',
  authDomain: 'american-shave-staging.firebaseapp.com',
  databaseURL: 'https://american-shave-staging.firebaseio.com',
  projectId: 'american-shave-staging',
  storageBucket: 'american-shave-staging.appspot.com',
  messagingSenderId: '1011084553217'
})

const catsRef = database().ref('categories')
const brandsRef = database().ref('brands')
const prodsRef = database().ref('products')

let index = 0

const runIt = prod => {
  let product = {
    name: prod.title,
    price: prod.price * 100,
    description: prod.description,
  }
  return catsRef.orderByChild('name').equalTo(prod.category.name).once('value')
    .then(snap => {
      const categories = snap.val()
      if (categories !== null) {
        product[Object.keys(categories)[0]] = Date.now()
        return brandsRef.orderByChild('name').equalTo(prod.brand.name).once('value')
      }
      const newCat = catsRef.push()
      product[newCat.key] = Date.now()
      return newCat.set({ name: prod.category.name }).then(() => {
        return brandsRef.orderByChild('name').equalTo(prod.brand.name).once('value')
      })
    })
    .then(snap => {
      const brands = snap.val()
      if (brands !== null) {
        product.brand = Object.keys(brands)[0]
        return prodsRef.push(product)
      }
      const newBrand = brandsRef.push()
      product.brand = newBrand.key
      return newBrand.set({ name: prod.brand.name }).then(snap2 => {
        return prodsRef.push(product)
      })
    }).then(() => {
      index++
      if (index === products.length) {
        process.exit()
      } else {
        runIt(products[index])
      }
    })
}

runIt(products[index])
