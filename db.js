const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/ecommerce',
{
        useCreateIndex: true,
        autoIndex: true,
        useNewUrlParser: true    
},
(err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        console.log(`connected successfully to MONGO`);
    }
}
)
