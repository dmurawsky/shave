const {request} = require('graphql-request')
const algoliasearch = require('algoliasearch')

const client = algoliasearch('82UENGW5U2', '680c8e335192c467542b3f057ce83533')
const apiUri = 'https://api.graph.cool/simple/v1/cj84yneno0fbz0157621ft0m4'

//
// const buildIndexes = (type, types) => {
//   types.map(({name}) => {
//     const index = client.initIndex(`dev_${type.toUpperCase()}_${name.replace(/\W/g, '').toUpperCase()}`)
//     request(apiUri, queryProducts(type, name)).then(({allProducts}) => {
//       index.addObjects(allProducts, console.log)
//     })
//   })
// }
//
// const queryType = type => `
//   query ${type} {
//     all${type} {
//       id
//       name
//     }
//   }
// `
//
const queryProducts = (type, name) => `
  query Products {
    allProducts${type&&name?`(filter: {
      ${type}: { name: "${name}"}
    })`:``} {
      id
      name
      price
      description
      brand { id, name }
      category { id, name }
    }
  }
`


const index = client.initIndex(`dev_PRODUCTS`)
request(apiUri, queryProducts()).then(({allProducts}) => {
  index.addObjects(allProducts, console.log)
})
//
// request(apiUri, queryType('Categories')).then(({allCategories})=>buildIndexes('category', allCategories))
// request(apiUri, queryType('Brands')).then(({allBrands})=>buildIndexes('brand', allBrands))
