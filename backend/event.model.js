const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema({
    event_name: {
        type: String
    },
    event_address: {
        type: String
    },
    event_size: {
        type: Number
    },
    event_cost: {
        type: Number
    }
});

module.exports = mongoose.model('Event', Event);
