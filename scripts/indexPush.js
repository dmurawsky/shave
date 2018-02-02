require('dotenv').config()
const algoliasearch = require('algoliasearch')

if (!process.env.ALGOLIA_APP_ID || !process.env.ALGOLIA_ADMIN_KEY) {
  throw new Error('Missing Algolia Env Vars')
}

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_ADMIN_KEY,
)
const index = client.initIndex(`dev_PRODUCTS`)
// const index = client.initIndex(`prod_PRODUCTS`)
const products = require('./products.json')

const formatProduct = product => ({
  ...product,
  category: product.category.name,
  brand: product.brand.name,
})

index.addObjects(products.map(formatProduct), console.log)
