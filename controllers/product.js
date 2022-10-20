const Product = require('../models/Product')

const addProduct = async (req, res) => {

    try {        
        const newProduct = new Product({
            category: req.body.category,
            products: [{
                name: req.body.products.name,
                price: req.body.products.price,
                image: req.body.products.image
            }]
        })
        newProduct.save((err) => {
            if (err) {
                console.log('Failed to save product')
                res.status(500).json({success: false, message: err})
            } else {
                res.status(201).json({success: true, message: `${newProduct} has been created`})
            }
        })
    } catch (error) {
        res.status(500).json({success: false, message: error})
    }

}

const allProducts = async (_, res) => {

    try {        
        const allProducts = await Product.find({})
        if (allProducts.length === 0 ) {
            res.status(404).json({success: false, message: 'No products found'})
        } else {
            res.status(200).json(allProducts)
        }
    } catch (error) {
        res.status(500).json({success: false, message: error})
    }

}

module.exports = {
    addProduct,
    allProducts
}
