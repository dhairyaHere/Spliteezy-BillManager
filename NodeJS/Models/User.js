const mongoose = require('mongoose');


// var Users = mongoose.model('User',{
//         username : { 
//             type : String,
//             require : true,
//             maxlength : 100
//         },
//         password : {
//             type : String,
//             require : true,
//             minlength :6
//         },
//         fullname : {
//             type : String,
//             require : true,
//             maxlength :150
//         },
//         email : {
//             type : String,
//             require : true,
//             maxlength : 100
//         },
//         contact : { 
//             type : Number,
//             require : true,
//             maxlength : 20
//         }
//     });

var userSchema = new mongoose.Schema({
    username: String,
    password:String,
    fullname: String,
    email: String,
    contact: Number
}, {collection : 'Users'});

var Users=mongoose.model('User',userSchema);


    module.exports = {Users};