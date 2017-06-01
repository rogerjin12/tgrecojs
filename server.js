const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/post/:slug', (req, res) => {
    console.log(req.params)
    return app.render(req, res, '/post', {
      slug: req.params.slug
    })
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })

  server.listen(3000)
})