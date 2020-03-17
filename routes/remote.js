var querystring = require('querystring');
var https = require('https');

var host = 'https://www.worldometers.info/coronavirus';

function performRequest() {

// const options = {
//     hostname: 'https://www.worldometers.info',
//     port: 443,
//     path: '/coronavirus',
//     method: 'GET'
//   }

  console.log("performRequest")


  request('https://example.com/url?a=b', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  });

  

}

module.exports = {performRequest};
