const express = require("express");
const bodyParser = require('body-parser');
const Express=require('express');
const  Mongoose  = require('mongoose');
const cors = require("cors");
const config = require('../Config/Config');

var app = Express();
const mongodbUrl = config.MONGODB_URL ;

//create db
Mongoose
    .connect(mongodbUrl, { useNewUrlParser: true }, (error, database) => {
        if (!error) {
            //   throw error
            console.log("success")
        }else {
            console.log("error connection to the db")
        }
    });


///router connect
const WordRoute = require('../Routes/WordRoute/Word.Route');

    app.use(cors());
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended : true}));
    // const port = process.env.PORT || 8000
    const port = config.PORT

    app.use('/Word', WordRoute);
    
    const server = app.listen(port, function () {
        console.log('Server Lisening On Port : ' + port);
    });
    