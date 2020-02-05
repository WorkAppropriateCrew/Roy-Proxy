const express = require('express')
var cors = require('cors')
const app = express()
const port = 8005 // updated from 3000
const path = require("path");

//middleware
app.use(cors())
app.use(express.static(path.join(__dirname, "/")));

// app.get('/', (req, res) => res.send('proxy server'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))