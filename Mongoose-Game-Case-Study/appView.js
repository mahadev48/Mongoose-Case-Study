var mongoose = require('mongoose');
var database = require('./database');
var users = require('./users');
var games = require('./games');
var loginsesion = require('./loginsession');
var gameplaylogs = require('./gameplaylogs');
var address = require('./address');

var Schema = mongoose.Schema;
database.init();

var callback = function(err,data){
	
	if(err)
		console.log(err);
	else
		console.log(data);
		
}	
//UserModel.find({},callback);
UserModel.getId('Alexa',callback);
//AddressModel.find({},callback)
//LoginsessionModel.find({},callback);
//GamesModel.find({},callback);
//GameplaylogsModel.find({},callback);