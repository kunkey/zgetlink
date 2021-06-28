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
        const dataId = helper.cutstring(siteResp.data, 'data-id="', '"');
        const dataEp = helper.cutstring(siteResp.data, 'data-episode-id="', '"');

        const exportData = {
            status: true,
            postid: dataId,
            posteps: dataEp
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

        var config = {
          method: 'get',
          url: 'https://vuighe.net/api/v2/films/'+movieData.postid+'/episodes/'+ movieData.posteps,
          headers: { 
            'Referer': UrlMovie,
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
          }
        };

        const getPlayer = await axios(config);
        const fileSource = getPlayer.data.sources; 
        exportData = {
            status: true,
            type: 'file',
            data: fileSource
        }
        return exportData;

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
