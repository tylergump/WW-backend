const express = require('express')
const router = express.Router ()

const ctrls = require('../controllers')


router.post('/signup', ctrls.users.signup);
router.post('/login', ctrls.users.login);
router.put('/update/:id', ctrls.users.updateUser)
router.delete('/delete/:id', ctrls.users.deleteUser)
router.delete('/logout/:id', ctrls.users.logout);


module.exports = router;