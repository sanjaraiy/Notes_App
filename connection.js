const mongoose = require('mongoose');

const ConnectToMongoDB = async (url) => {
    try {
        await mongoose.connect(url);
        return console.log('Successfully connected MongoDB..!!');
    } catch (error) {
        console.log("Error : ", error);
    }
}

module.exports = ConnectToMongoDB;