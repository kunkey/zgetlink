const express = require('express')
const router = express.Router();
const helper = require('../helpers');
const javhayModule = require('../module/javhay');

router.get("/", async (req, res) => {
    if(req.query.url == '' || !req.query.url || req.query.url == null) {
        res.json({
            status: false,
            msg: 'Error: Empty Url!'
        });
    }else {
        const checkUrl = helper.checkUrlValidate(req.query.url);
        if(checkUrl) {
            
            const movieID = await javhayModule.getPlayer(req.query.url);

            res.json(movieID);
            
        }else {
            res.json({
                status: false,
                msg: 'Error: Url Isn\'t Availible!'
            });   
        }


    }
});



module.exports = router;
