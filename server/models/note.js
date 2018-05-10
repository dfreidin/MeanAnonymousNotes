const mongoose = require("mongoose");
var NoteSchema = mongoose.Schema({
    note: {type: String, required: true, minlength: 3}
}, {timestamps: true});
mongoose.model("Note", NoteSchema);