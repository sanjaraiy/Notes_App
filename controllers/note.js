const mongoose = require('mongoose');

//=====================Create Notes Schema===========================
const noteSchema = new mongoose.Schema({
    title : {
        type: String,
        required:true
    },
    content : {
        type:String,
        required:true
    },
    tags : {
        type:[String],
        default:false
    },
    isPinned : {
        type:Boolean,
        default:false
    },
    userId : {
        type:String,
        required:true
    },
    createdOn : {
        type:Date,
        default:new Date().getTime()
    }
});


//===================Create Notes Model===========================
const Note = mongoose.model("Note",noteSchema);

module.exports = Note;