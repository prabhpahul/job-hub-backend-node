var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource ds');
  // direct way
client.get("http://demo.ckan.org/api/3/action/package_list", function (data, response) {
	// parsed response body as js object
	console.log(data);
	// raw response
	//console.log(response);
});
client.get("http://demo.ckan.org/api/3/action/package_search?q=spending", function (data, response) {
	// parsed response body as js object
	console.log(data);
	// raw response
	//console.log(response);
});

});

module.exports = router;
