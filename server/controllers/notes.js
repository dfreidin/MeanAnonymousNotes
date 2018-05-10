const mongoose = require("mongoose");
const Note = mongoose.model("Note");
function buildQueryHandler(res) {
    return function(err, data) {
        if(err) {
            res.json({
                message: "Error",
                error: err
            });
        }
        else {
            res.json({
                message: "Success",
                data: data
            });
        }
    }
}
module.exports = {
    index: function(req, res) {
        Note.find({}, null, {sort: {createdAt: -1}}, buildQueryHandler(res));
    },
    create: function(req, res) {
        Note.create(req.body, buildQueryHandler(res));
    }
}