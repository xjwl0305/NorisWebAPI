const login = require('./login/login.js');
const express = require('express');
const {models} = require("mongoose");

var router = express.Router();
module.exports = router;
router.use('/checkID', login);

