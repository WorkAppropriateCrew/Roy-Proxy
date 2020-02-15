const express = require('express')
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000
const app = express()

//This is a test

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// app.get('/', (req, res) => res.send('proxy server'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
