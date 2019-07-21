const express = require('express')
const app = express()
const path = require('path')

const PORT = 3001

app.use('/assets', express.static('assets'))

app.route('/users') 
	.get((req, res) => {
		res.json([{
		  	id: 1,
		  	username: "Jamie"
		  }, {
		  	id: 2,
		  	username: "Josh"
		  }]);
	})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
})