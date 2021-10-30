const db = require('../models');
const bcrypt = require('bcrypt');


const signup = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  db.User.create(req.body, (error, createdUser) => {
    if(error) {
      res.status(400).json({ error: error.message })
    } else {
      console.log("user has been registered")
      res.status(201).json(createdUser)
    }
  })
}


const login = (req, res) => {

  db.User.findOne({ username: req.body.username }, (err, foundUser) => {
    if(err) {
      res.send(err)
    } else {
      if (foundUser) {
        if (bcrypt.compareSync(req.body.password, foundUser.password)){
          req.session.currentUser = foundUser
          console.log('user has been logged in')
          res.status(200).json(foundUser)
        } else {
          res.status(404).json({error: 'Incorrect password'})
        }
      } else {
        res.status(400).json({ error: err })
      }
    }
  })
}

const updateUser = (req, res) => {
    db.User.findbyIdAndUpdate (
        req.params.id,
        req.body,
        {new:true},
        (error, updatedUser) => {
            if (error) 
                return res.status(400).json({error: error.message})
                return res.status(200).json(updateUser)
        }) 
}

const deleteUser = (req, res) => {
  db.User.findByIdAndDelete (
      req.params.id,
      (error, deleteUser) => {
          if (error) 
              return res.status(400).json({error: error.message})

              return res.status(200).json ({
                message: "Account Deleted"
              })
      })
}

const logout = (req, res) => {
  req.session.destroy(() => {
      res.status(200).json({ msg: 'users logged out' })
  })
}


module.exports = {
  signup,
  login,
  updateUser,
  deleteUser,
  logout,
}