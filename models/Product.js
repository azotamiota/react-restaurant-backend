const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    category: {
        type: String, 
        required: true,
        maxLength: [50, 'username length can be max 20 characters'],
        trim: true 
    },
    products: [
        {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true
            },
            image: {
                type: String
            }
        }
    ]
    
})

module.exports = mongoose.model('Product', ProductSchema)
