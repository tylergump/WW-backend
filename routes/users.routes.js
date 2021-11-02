const express = require('express')
const router = express.Router ()

const ctrls = require('../controllers')


router.post('/signup', ctrls.users.signup);
router.post('/login', ctrls.users.login);
router.put('/update/:id', ctrls.users.updateUser)
router.delete('/delete/:id', ctrls.users.deleteUser)
<<<<<<< HEAD
=======
router.delete('/logout', ctrls.users.logout);
>>>>>>> 2dd264f (need to pull and push again for heroku for some reason)
router.delete('/logout/:id', ctrls.users.logout);


module.exports = router;