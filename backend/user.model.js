const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    u_name: {
        type: String
    },
    u_password: {
        type: String
    },
    u_cpassword: {
        type: String
    },
    u_email:{
        type: String
    },
    u_org:{
        type:String
    },
    u_phone:{
        type:Number
    }
});

module.exports = mongoose.model('User', User);
