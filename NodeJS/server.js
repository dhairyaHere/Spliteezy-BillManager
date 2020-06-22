var express = require("express");
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:4200' }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    //res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Spliteezy", { useNewUrlParser: true,useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', mongoConnected);

function mongoConnected() {
	var userSchema = new mongoose.Schema({
		username: String,
		password:String,
		fullname: String,
		email: String,
		contact: Number
	}, {collection : 'Users'});
	
	
	
	var User=mongoose.model('User',userSchema);
	
	module.exports={User};

	app.post("/register",(req,res) =>{
		
		var user=new User(req.body);
		console.log(user.username);
		User.find({username:user.username},function(err,t){
			console.log(t.length);
			if(t.length == 0){
				user.save(function(err){
					if (err) {
						res.status(400);
						res.send("Unable to add names");
					}
					else {	
						console.log("User added!");
						res.send({ "message": true});
					}
			
				});
			}
			else{
						res.send({ "message": false});
			}
		});
		
	})
	
	
	app.post("/login", (req, res) => {
		var user = mongoose.model("user", userSchema);
		console.log(req.body.uname +" "+req.body.pswd);
		user.findOne({username:req.body.uname,password:req.body.pswd},function(err,usr){
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send("No employee with given id found!");
			}else{
				console.log(usr);
				res.send(usr);
			}
		});
	});	
	
	app.post("/abcd", (req, res) => {
		var user = mongoose.model("user", userSchema);
		console.log(req.body.uname );
		user.findOne({username:req.body.uname},function(err,usr){
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send("No employee with given id found!");
			}else{
				console.log(usr);
				res.send(usr);
			}
		});
	});

	app.post("/fetch", (req, res) => {
		var user = mongoose.model("user", userSchema);
		console.log(req.body.uname +" data fetching....")
		user.findOne({username:req.body.uname},function(err,usr){
			if (err) {
				console.log("No employee with given id found!");
				res.status(400);
				res.send("No employee with given id found!");
			}else{
				console.log(usr);
				res.send(usr);
			}
		});
	});
	
	app.post("/updateaccount",(req,res) =>{
		
		var user=new User(req.body);
		User.findOneAndUpdate({username:user.username},
		{fullname:user.fullname,password:user.password,mobile:user.mobile,email:user.email},
			function(err,t){
					console.log(t.username + " is to be updated...");
					if (err) {
						res.status(400);
						res.send(err);
					}
					else {	
						console.log("User updated!");
						res.send({ "status": true});
					}
			});
	})
}
app.listen(8000);

