const express = require('express')
const app = express()
const port = 8005 // updated from 3000
const path = require("path");




// This line is necessary to render React files
app.use(express.static(path.join(__dirname, "/../client/dist")));

app.get('/', (req, res) => res.send('proxy server'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))