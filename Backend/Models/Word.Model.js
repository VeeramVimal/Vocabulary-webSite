
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let WordSchema = new Schema({

    app_id: {
        type: String,

    },

    app_key: {
        type: String,

    },

    endpoint: {
        type: String,

    },
    language_code: {
        type: String,

    },
   
},{
    collection: "Words"

});

module.exports = Words = Mongoose.model('Words',WordSchema);
