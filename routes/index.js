var express = require("express");
var router = express.Router();

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

router.use(requestTime);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get(
  "/example/b",
  function (req, res, next) {
    console.log(req.requestTime);
    next();
  },
  function (req, res) {
    res.send(String(req.requestTime));
  }
);

var cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

var cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

var cb2 = function (req, res) {
  res.send("Hello from C!");
};

router.get("/example/c", [cb0, cb1, cb2]);

module.exports = router;
