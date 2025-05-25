const mongoose = require('mongoose');

async function connectDB(mUrl) {
    return mongoose.connect(mUrl);
}

module.exports = {connectDB};