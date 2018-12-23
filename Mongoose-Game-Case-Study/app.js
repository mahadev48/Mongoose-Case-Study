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
		console.log("error is "+err);
	else
		console.log(data);
		
}
var alex = new UserModel({userid:'Ayush',password:'passwd',balancechips:25000.0,state:1,
emailid:'Alex@tutorialtous.com'});
alex.save(callback); 

alex.getUserId('Alexa',callback);

var alexaddress = new AddressModel({userid:alex._id,addresstype:"Office",city:"Mumbai",state:"MahaRastra",
country:"INDIA",pincode:400703});
alexaddress.save(callback);
 
var videopoker = new GamesModel({gameid:'23396',gamename:'VideoPoker',state:1,minbet:10,maxbet:10000,
company:'tutorialtous.com'});
videopoker.save(callback);

var alexls= new LoginsessionModel({userid:alex._id,sessionid:'sess123456',ip:'x.y.z.q',startworth:25000,
logintime:new Date(),totalbet:0,totalwin:0});
alexls.save(callback);

var alexlog1= new GameplaylogsModel({logid:'tts100000',userid:alex._id,sessionid:alexls._id,
gameid:videopoker._id,betamount:1000,winamount:1250,playtime:new Date()});
alexlog1.save(callback);