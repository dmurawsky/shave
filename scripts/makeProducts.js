const fs = require('fs')
const {categories, levels, brands} = require('./products')

let products = [];

categories.map(cat=>{
  levels.map(lvl=>{
    brands.map(brn=>{
      products.push({
        title: `${brn} ${cat} ${lvl}`,
        category: { name: cat },
        brand: { name: brn },
        price: Math.floor(Math.random() * 31) + 50,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque enim, condimentum ut metus ut, sagittis sodales arcu. Praesent sed ligula vestibulum, convallis mauris in, lobortis velit. Vestibulum lacinia libero in tortor pharetra, at pulvinar massa laoreet. Nunc et dapibus ex, a maximus arcu. Nulla vestibulum lacinia tincidunt. Fusce ut faucibus nulla. Aenean tincidunt, urna sit amet ultrices faucibus, ligula massa viverra ex, eu consectetur lorem sem vel erat.'
      })
    })
  })
})


const path = __dirname + '/products.json'
fs.writeFileSync(path, JSON.stringify(products, null, 2), 'utf-8')
console.log(path, products.length)
