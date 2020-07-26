var express = require("express");
var router = express.Router();

/* GET home page. */

//http://og-social-sharing.herokuapp.com/

router.get("/", function (req, res, next) {
  var ua = req.headers["user-agent"];
  console.log(ua);
  if (/^(facebookexternalhit|twitterbot|LinkedInBot)/gi.test(ua)) {
    console.log(
      "========================Social Media=============================="
    );
    res.render("index", {
      title: "Express",
      now: Date.now(),
      location: req.protocol + "://" + req.get("host") + req.originalUrl,
      ua,
    });
  } else {
    console.log(
      "========================User Click=============================="
    );
    res.redirect("http://localhost:8181/#BVZPHVFY");
  }
});

module.exports = router;
