require('dotenv').config()
const algoliasearch = require('algoliasearch')
const { initializeApp, database } = require('firebase')
const Promise = require('bluebird');

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_ADMIN_KEY)
initializeApp({
  apiKey: 'AIzaSyAtLrsgz5zdjLDbQ-RO58IJLk0jF5vDQVw',
  authDomain: 'american-shave-staging.firebaseapp.com',
  databaseURL: 'https://american-shave-staging.firebaseio.com',
  projectId: 'american-shave-staging',
})

const prodsRef = database().ref('products')
const index = client.initIndex(`dev_PRODUCTS`)

index.search({query: '',hitsPerPage: 500}).then(({hits}) => {
  prodsRef.on('value', snap => {
    const products = snap.val()
    const proms = Object.keys(products).map(firebaseKey => {
      let prom
      hits.map(({objectID, title}) => {
        if (title === products[firebaseKey].name) {
          const update = {
            price: products[firebaseKey].price,
            objectID,
          }
          console.log('Updating: ' + JSON.stringify(update))
          prom = index.partialUpdateObject(update)
        }
      })
      return prom
    })
    Promise.all(proms).then(() => process.exit())
  })
})
