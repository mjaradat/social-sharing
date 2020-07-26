var express = require("express");
var router = express.Router();
var multer = require("multer");

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images');
    },
    filename: function(req, file, cb) {
        console.log(file);
        var filetype = "";
        if (file.mimetype === "image/gif") {
            filetype = "gif";
        }
        if (file.mimetype === "image/png") {
            filetype = "png";
        }
        if (file.mimetype === "image/jpeg") {
            filetype = "jpg";
        }
        cb(null, "share." + filetype);
    },
});

var upload = multer({ storage: storage }).single("sharingImage");

router.post("/", function(req, res) {
    upload(req, res, function(err) {
        res.json({
            success: true,
            message: "Image uploaded!",
        });
    });
});

module.exports = router;