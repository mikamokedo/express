const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const userSchema = new Schema({
    firstName : String,
    lastName : String,
    email : String,
    cars: [
        {
            type: Schema.ObjectId,
            ref:'car'
        }
    ]
});

const User = mongoose.model('user', userSchema);
module.exports = User;








