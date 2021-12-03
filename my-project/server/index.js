const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routers/routes.js');
const { database } = require('../database');
require('dotenv').config()

const port = process.env.PORT || 3001;
const app = express()
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors({
    origin: ["http://localhost:3001", "http://localhost:3000"],
    methods: ["GET", "POST","UPDATE", "DELETE", "PATCH", "PUT", "OPTIONS"],
    credentials: true,
  }));
app.use('/api', routes);





app.listen(port, () => { console.log(`port ${port}`); })