const express = require('express')

const PORT = process.env.PORT || 3003

const routes = require('./routes')

const dotenv = require('dotenv').config()

const session = require('express-session')

const cors = require('cors')

const app = express()

const MongoDBStore = require('connect-mongodb-session')(session)

require('./config/db.connection')

const whitelist = ['http://localhost:3000', 'https://api.petfinder.com/v2/','https://frontend-ww.herokuapp.com']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        }else {
            callback(new Error ('Not allowed by CORS'))
        }
    },
    credentials:true
}

app.use(cors(corsOptions))


// cors options...
// session settings
app.set('trust proxy', 1) // trust first proxy
// this line is creating the object "req.session"

app.use(session({
    secret: process.env.SESSION_SECRET || "A6SD5F6d56fs5fs6f6529S8D9F9X8DG1WS6FG4",
    resave: false,
    saveUninitialized: false,
    store: new MongoDBStore({
        uri: process.env.MONGODBURI,
        collection: 'mySessions'
    }),
    cookie:{
        sameSite: 'none',
        secure: true
    }
 }))
  
  const isAuthenticated = (req, res, next) => {
      if (req.session.currentUser) {
          return next()
      } else {
          res.status(403).json({msg:"login required"})
      }
  }
  
  app.use(express.json());
  


app.get('/', function (req, res) {
    res.send("Wags & Whiskers")
})

app.use('/users', routes.users)
app.use('/animals', routes.animals)




app.listen(PORT, () => {
    console.log ("Server is running")
})