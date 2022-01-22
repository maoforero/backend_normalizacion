const express = require('express');
const app = express();
const PORT = 3000

//Routes
app.use("/api", require('./src/routes'))


app.use(express.static(__dirname + 'public'));
app.use(express.json());


app.listen(PORT, () => console.log(`It's Alive 🤖 http://localhost:${PORT}`))

