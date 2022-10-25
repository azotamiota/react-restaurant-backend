const express = require('express')
const app = express()
const cors = require('cors')

const productController = require('./controllers/product')
const paymentController = require('./controllers/payment')


app.use(cors())
app.use(express.json())

app.get('/', (_, res) => {res.json({message: 'Welcome to restaurant template backend'})})
// app.post('/add-product', productController.addProduct) // Disabled temporarily
app.get('/products', productController.allProducts)
app.post('/create-payment-intent', paymentController.payment)


module.exports = app;
