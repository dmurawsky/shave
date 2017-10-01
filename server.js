const express = require('express')
const next = require('next')
// const stripe = require('./stripe')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.json());
  // server.post('/subscription', (req, res) => {
  //   stripe(req.body, err => res.json({ success:(err?false:true), error: (err?err:null) }))
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
