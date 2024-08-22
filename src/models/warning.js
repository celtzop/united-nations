// models/warning.js
const mongoose = require('mongoose');

const warningSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    moderatorId: { type: String, required: true },
    moderatorName: { type: String, required: true },
    uniqueToken: { type: String, required: true },
    reason: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Warning', warningSchema);
