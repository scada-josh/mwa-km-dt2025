import { createServer } from 'node:http'
import { parse } from 'node:url'
import next from 'next'
import dotenv from 'dotenv'
// import io from './src/app/api/socket-io'
import io from './socket-io'
dotenv.config()
 
const port = parseInt(process.env.PORT || '3001', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
 
app.prepare().then(() => {

//   createServer((req, res) => {
//     const parsedUrl = parse(req.url!, true)
//     handle(req, res, parsedUrl)
//   }).listen(port) 






  const httpServer = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)
    handle(req, res, parsedUrl)
  }).listen(port)

  // ให้ socket.io ทำงานกับ next.js ได้ 
  io?.attach(httpServer)

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})