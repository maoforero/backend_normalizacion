const express = require('express')
const app = express()
const routerPro = require('./src/routes/productos.js')
const PORT = 3000

app.use(express.static(__dirname + 'public'));

app.get("/api", (req, res) => {
  res.send("Server")
})

app.use("/products", routerPro);

app.listen(PORT,(req, res) => {
  console.log(`It's Alive 🤖 http://localhost:${PORT}`)
})

