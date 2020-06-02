const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const productList = require('./asset/product.json');


const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
const port = 3000

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile('../public/index.html');
})

app.get('/products', (req, res) => {
  res.send(productList).status(200)
})
// make a post request.....
app.post('/order', function (req, res) {
    console.log(req.body);
    res.send('order completed').status(201)
  })


// console log the product in the express server
// user bought product $product_name for $product_price


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))