const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

let CatagorySchema = new Schema({

    Word_name: {
        type: String,
  
    },
  
},{
    collection: "catagories"

});

module.exports = Catagory = Mongoose.model('catagories',CatagorySchema);
