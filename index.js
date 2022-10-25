const app = require('./app')
const connectDB = require('./db/connect')
require('dotenv').config()

const port = process.env.PORT || 5000

const connectDatabase = async () => {
    
    await connectDB(process.env.MONGO_URI)
        .then(() => console.log('Connected to database...'))
        .then(() => app.listen(port))
        .then(() => console.log(`Server is running on port ${port}`))
        .catch(error => console.log('Can\'t connect to db or server: ', error))
            
}
connectDatabase()
