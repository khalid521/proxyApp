var express = require('express');
var router = express.Router();
 var remote = require('./remote')
 var https = require('https');

/* GET users listing. */
router.get('/', function(req, res, next) {

var options = {
  host: 'www.worldometers.info',
  port: 443,
  path: '/coronavirus/',
  method: 'GET'
};



https.get('https://www.worldometers.info/coronavirus/', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    res.set('Content-Type', 'text/plain')
    res.set('ResponseType' , 'text')
    res.send((data))
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

});


module.exports = router;


