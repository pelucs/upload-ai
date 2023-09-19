import { fastify } from 'fastify'

const app = fastify();

app.get("/", () => {
  return "Olá mundo!"
});

app.listen({
  port: 3333
})
.then(() => {
  return console.log("HTTP Server running!")
})