const express = require('express')
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000
const app = express()

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.listen(port, () => console.log(`App is listening on port: ${port}!`)) 