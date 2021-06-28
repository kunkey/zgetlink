const cutstring = (string, start, end) => {
    const nd1 = string.split(start);
    const nd2 = nd1[1].split(end);
    return nd2[0];
};

const checkUrlValidate = (string) => {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
}

function parseUrl(urlString) {
	var url = require('url');
	var parse = url.parse(urlString, true);
	var host = parse.hostname.split('.');
	return host[0];
};

const replaceCharUrl = (string) => {
    let stringExport = string;
    stringExport = stringExport.split('&#34;').join('"');
    stringExport = stringExport.split('&amp;').join('&');
    return stringExport;
}

module.exports = {
    cutstring,
    checkUrlValidate,
    parseUrl,
    replaceCharUrl
}