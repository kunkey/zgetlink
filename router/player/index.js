const express = require('express')
const router = express.Router();
const helper = require('../api/helpers');
const axios = require('axios');
const fs = require('fs');

router.use("/", async (req, res) => {
    if(req.query.url == '' || !req.query.url || req.query.url == null) {
        res.json({
            status: false,
            msg: 'Error: Empty Url!'
        });
    }else {
        const checkUrl = helper.checkUrlValidate(req.query.url);
        if(checkUrl) {


        	const pathExcute = helper.parseUrl(req.query.url);

        	try {
        		const funcExcute = require('../api/module/'+pathExcute+'.js');
        		const dataResp = await funcExcute.getPlayer(req.query.url);

				res.render("player/player", {
					data: JSON.stringify(dataResp.data)
				});
        	}catch(error) {
        		console.log(error);
        		res.json({
		            status: false,
		            msg: 'Can\'t not get Player'
		        });
        	}

		}else {
			res.json({
                status: false,
                msg: 'Error: Url Isn\'t Availible!'
            });   
		}
	}
});

module.exports = router;