const express = require('express')
const router = express.Router();
const helper = require('../helpers');
const vuigheModule = require('../module/vuighe');

router.get("/", async (req, res) => {
    if(req.query.url == '' || !req.query.url || req.query.url == null) {
        res.json({
            status: false,
            msg: 'Error: Empty Url!'
        });
    }else {
        const checkUrl = helper.checkUrlValidate(req.query.url);
        if(checkUrl) {
            
            const moviePlayer = await vuigheModule.getPlayer(req.query.url);

            res.json(moviePlayer);
            
        }else {
            res.json({
                status: false,
                msg: 'Error: Url Isn\'t Availible!'
            });   
        }

    }
});


module.exports = router;