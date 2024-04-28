const mongoose = require('mongoose')

const {type} = require('os');

const shopSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "please enter shop name"],
        maxLength : [30, "name can't be exceed 30 characters"],
        minLenght : [4, " name should have more than  4 characters"]
    },
    description :{
        type : String,
        required : [true, "please enter shop description"],
        minLength : [4, " description should have more than  4 characters"]
    },
    ratings : {
        type : Number, 
        default : 0
    },
    images : [
        {
            public_id : {
                type : String,
                required : true
            },
            url : {
                type : String,
                required : true
            }
        }
    ],
    category : {
        type : String,
        required : [true, "please enter shop Category "]
    },
    address : {
        type : String,
        required : [true, "please enter shop address"],
        minLength : [4, " address should have more than  4 characters"]
    },
    listedProducts :[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Shop', shopSchema);