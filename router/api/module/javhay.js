const helper = require('../helpers');
const axios = require('axios');

const getPlayer = async (UrlMovie) => {
    try {

        var configWeb = {
          method: 'get',
          url: UrlMovie,
          headers: { }
        };

        const movieData = await axios(configWeb);

        const iframeSrc = helper.cutstring(movieData.data, '<iframe src="', '"');

        var config = {
            method: 'get',
            url: iframeSrc,
            headers: {}
          };

        const getPlayer = await axios(config);



        try {

            let fileSource = helper.cutstring(getPlayer.data, 'sources: ', '},') + '}';
            fileSource = fileSource.split("file:").join('"file":');
            fileSource = fileSource.split("type:").join('"type":');
            fileSource = fileSource.split("'").join('"');
            fileSource = '['+ fileSource + ']';
            
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
    getPlayer
}
