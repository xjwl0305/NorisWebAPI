var mongoose    = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    id : String,
    password : String,
    email : String,
    log_path : []
});

module.exports = mongoose.model('user_info', userSchema);
