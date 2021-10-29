const express = require('express')
const router = express.Router ()

const ctrls = require('../controllers')


router.post('/animals', ctrls.animals.petData);


module.exports = router;