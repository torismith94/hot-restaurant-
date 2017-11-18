var path = require('path');

module.exports = function (app) {

	app.get('/tables', function(req, res) {
<<<<<<< HEAD
  		res.sendFile(path.join(__dirname + '/../public/tables.html'));
});
	app.get('/reserve', function(req, res) {
  		res.sendFile(path.join(__dirname + '/../public/reserve.html'));

  	app.use('/', function(req, res) {
  		res.sendFile(path.join(__dirname + '/../public/home.html'));	
=======
  		res.sendFile(path.join(__dirname + '/../tables.html'));
});
	app.get('/reserve', function(req, res) {
  		res.sendFile(path.join(__dirname + '/../reserve.html'));

  	app.use('/', function(req, res) {
  		res.sendFile(path.join(__dirname + '/../home.html'));	
>>>>>>> fe2005fcb84f23923ef3edcee1737abc6ba0cce8
}