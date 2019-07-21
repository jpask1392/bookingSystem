const express = require('express');
const router = express.Router();

// User Model
const User = require('../../db/models/User');

// @route   GET api/users
// @desc    Gets all the users
// @access  Public
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users));
}

module.exports = router;