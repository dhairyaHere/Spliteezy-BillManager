const mongoose = require('mongoose');


var Expenses = mongoose.model('expenses',{
        given_by : { 
            type : String,
            require : true,
            maxlength : 100
        },
        given_to : {
            type : String,
            require : true,
            maxlength :150
        },
        group_name : {
            type : String,
            require : true,
            maxlength : 100
        },
        amount : { 
            type : Number,
            require : true,
            maxlength : 20
        }
    });

    module.exports = {Expenses};