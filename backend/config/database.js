const mongoose = require('mongoose')

require('dotenv').config()

exports.connect = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "yoga-master-server",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("DB Connected Successfully"))
        .catch((error) => {
            console.log("this error occured" + error)
            process.exit(1)
        })
}
