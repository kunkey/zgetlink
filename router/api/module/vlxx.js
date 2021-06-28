const helper = require('../helpers');
const axios = require('axios');

const getPostData = async (urlMovie) => {
    try {
        var config = {
            method: 'get',
            url: urlMovie,
            headers: {}
        };

        const siteResp = await axios(config);
        const postID = helper.cutstring(siteResp.data, 'var vid = ', ';');

        const exportData = {
            status: true,
            postid: postID
        };

        return exportData

    }catch(error) {
        return {
            status: false,
            msg: 'Can\'t not get ID POST'
        };   
    }
}



const getPlayer = async (UrlMovie) => {
    try {

        const movieData = await getPostData(UrlMovie);

        var data = 'vlxx_server=1&id='+ movieData.postid +'&server=1';

        var config = {
          method: 'post',
          url: 'https://vlxx.tube/ajax.php',
          headers: { 
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
          },
          data : data
        };

        const getPlayer = await axios(config);
        const playerInit = getPlayer.data.player; 

        try {
            const fileSource = helper.cutstring(playerInit, 'sources: ', ']')+']';
            exportData = {
                status: true,
                type: 'file',
                data: JSON.parse(fileSource)
            }
            return exportData;
        }catch(error) {
            return {
                status: false,
                msg: 'Can\'t not get Player'
            };
        }


    }catch(error) {
        return {
            status: false,
            msg: 'Can\'t not get Player'
        };
    }
}


module.exports = {
    getPostData,
    getPlayer
}
