const express = require('express');
const app = express();
const router = express.Router()
const WordsController = require('../../Controllers/WordController/Words.controller');

const path = require("path");

///get list od user details
router.get('/getWords', WordsController.get_words);

//create admin new details
router.post('/addWords', WordsController.add_word);

module.exports = router;
