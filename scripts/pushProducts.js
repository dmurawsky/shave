const {request} = require('graphql-request')
const Promise = require('bluebird')
const {categories, levels, brands} = require('./products')

const apiUri = 'https://api.graph.cool/simple/v1/cj84yneno0fbz0157621ft0m4'

let products = []
let db = {}
let proms = []


categories.map(cat=>{
  levels.map(lvl=>{
    brands.map(brn=>{
      products.push({
        name: `${brn} ${cat} ${lvl}`,
        category: cat,
        brand: brn,
        price: Math.floor(Math.random() * 31) + 50,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque enim, condimentum ut metus ut, sagittis sodales arcu. Praesent sed ligula vestibulum, convallis mauris in, lobortis velit. Vestibulum lacinia libero in tortor pharetra, at pulvinar massa laoreet. Nunc et dapibus ex, a maximus arcu. Nulla vestibulum lacinia tincidunt. Fusce ut faucibus nulla. Aenean tincidunt, urna sit amet ultrices faucibus, ligula massa viverra ex, eu consectetur lorem sem vel erat.'
      })
    })
  })
})

const all = type => `
  query ${type} {
    all${type} {
      ${type!=='Products'?`id
      name`:`id
      name
      price
      description
      brand {
        id
        name
      }
      category {
        id
        name
      }
      `}
    }
  }
`

const findByName = (series, name) => series.find(item=>item.name===name)

const syncProducts = ({cats, prods, brnds}) => {
  products.map(prod => {
    if (typeof findByName(prods, prod) === 'undefined') {
      proms.push(request(apiUri, `mutation NewProduct {
        createProduct(
          name: "${prod.name}",
          categoryId: "${findByName(cats, prod.category).id}",
          brandId: "${findByName(brnds, prod.brand).id}",
          price: ${prod.price},
          description: "${prod.description}"
        ) { id, name }
      }`))
    }
  })
  Promise.all(proms).then(console.log)
}

const syncCatsAndBrands = ({cats, prods, brnds}) => {
  categories.map(category => {
    if (typeof findByName(cats, category) === 'undefined') {
      proms.push(request(apiUri, `mutation NewCategory {
        createCategory(name: "${category}") { id, name }
      }`))
    }
  })
  brands.map(brand => {
    if (typeof findByName(brnds, brand) === 'undefined') {
      proms.push(request(apiUri, `mutation NewBrand {
        createBrand(name: "${brand}") { id, name }
      }`))
    }
  })
  Promise.all(proms).then(data=>{
    return getData()
  }).then(data => {
    proms = []
    syncProducts(data)
  })
}

const getData = () => request(apiUri, all('Products')).then(({allProducts}) => {
  db.prods = allProducts
  return request(apiUri, all('Categories'))
}).then(({allCategories}) => {
  db.cats = allCategories
  return request(apiUri, all('Brands'))
}).then(({allBrands}) => {
  db.brnds = allBrands
  return db
})

getData().then(data => syncCatsAndBrands(data))



// console.log(path, products.length)
