const mongoose = require("mongoose")

exports.connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo is running:${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);
    }
};