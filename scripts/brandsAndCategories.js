const {request} = require('graphql-request')

const apiUri = 'https://api.graph.cool/simple/v1/cj84yneno0fbz0157621ft0m4'

const all = type => `
  query ${type} {
    all${type} {
      id
      name
    }
  }
`

request(apiUri, all('Categories')).then(console.log)
request(apiUri, all('Brands')).then(console.log)
