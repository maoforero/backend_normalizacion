const express = require('express');
const app = express();
const router = require('./src/Routes')
const PORT = 3000

app.use(express.static(__dirname + 'public'));
app.use(express.json());
app.use("/api", router)

app.listen(PORT, () => console.log(`It's Alive 🤖 http://localhost:${PORT}`))

