const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const usersRoutes = express.Router();
const PORT = 4000;
const db = require('./config/keys').mongoURI;

const users = require('./db/models/users.model');

app.use('/assets', express.static('assets'))

// Bodyparser Middleware
app.use(bodyParser.json());


mongoose
	.connect(db, { useNewUrlParser: true})
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

// Use Routes

app.use('/users', usersRoutes);

// usersRoutes.route('/users').get((req, res) => {
// 	users.find(function(err, users) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			res.json([
// 				{
// 					username
// 				}
// 			]);
// 		}
// 	});
// 	// res.json([
// 	// 	{
// 	// 	  	id: 1,
// 	// 	  	username: "Jamie"
// 	// 	},
// 	// 	{
// 	// 		id: 2,
// 	// 		username: "Josh",
// 	// 		password: "password",
// 	// 	}
// 	// ]);
// });

usersRoutes.route('/login/:username','/:password').post((req, res) =>{
	let username = req.params.username;
	let password = req.params.password;
	users.findById(username, function(err, users) {
		if (users.password == password) {
			res.sendStatus(200);
		} else {
			res.sendStatus(400).send('Username and password are incorrect');
		}
	})
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
})