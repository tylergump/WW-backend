const express = require('express')
const router = express.Router ()

const ctrls = require('../controllers')


router.post('/signup', ctrls.users.signup);
router.post('/login', ctrls.users.login);
router.put('./update', ctrls.users.updateUser)
router.delete('/logout', ctrls.users.logout);


module.exports = router;