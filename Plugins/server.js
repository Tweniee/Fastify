const fastify = require('fastify')()
fastify.register(require('@fastify/jwt'), {
  secret: 'supersecret'
})

fastify.get('/login', (req, reply) => {
  // some code
  const token = fastify.jwt.sign({ payload:"payload" })
  reply.send({ token })
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
})