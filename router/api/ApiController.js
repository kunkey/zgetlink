const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
	res.status(403).send("<h1><center>Access Denifed!</center></h1>");
});

const vaophimRouter = require('./site/vaophim');
const vlxxRouter = require('./site/vlxx');
const javhayRouter = require('./site/javhay');
const vuigheRouter = require('./site/vuighe');

// Router HTTP
router.use("/vaophim", vaophimRouter);
router.use("/vlxx", vlxxRouter);
router.use("/javhay", javhayRouter);
router.use("/vuighe", vuigheRouter);

module.exports = router;