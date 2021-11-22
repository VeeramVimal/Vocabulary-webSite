const Validate = require("../../Helper/Validate");
const Wordmodel = require("../../Models/Word.Model");
// const oxford = require("oxford-dictionaries-api");
const Dictionary = require("oxford-dictionary-api");

// const get_words = (req, res) => {
//     let app_id = "id";
//     let app_key = "key";
//     let oxforddictionaries = new oxford(app_id, app_key);
//     let endpoint = "entries";
//     let language_code = "en-gb";
//     var word = req.params.id;

//     oxforddictionaries.get("/:id", function (req, res) {
//         let url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${word}`;

//         fetch(url, {
//             method: "GET",
//             mode: "no-cors",
//             headers: { app_key: app_key, app_id: app_id },
//         })
//             .then((response) => response.json())
//             .then((data) => res.send(data));
//     })

// }

const get_words = (req, res) => {
    var app_id = "your oxford-account app id";
    var app_key = "your oxford-account app key";
    var dict = new Dictionary(app_id,app_key);
    dict.find("ace",function(error,data){
      if(error) return console.log(error);
      else{
        res.json()
      }
      console.log(data);
    });
    
}

// /create new Word
const add_word = (req, res) =>{
    let newData ={
        app_id:req.body.app_id,
        app_key: req.body.app_key ,
        endpoint: req.body.endpoint,
        language_code: req.body.language_code,

    };
    let Item = new Wordmodel(newData);  
    Item.save()
        .then(game => {          
          return res.status(200).json(Validate.add_word)
        })
        .catch(err =>{
            console.log('error',err)
            res.status(400).send(Validate.error)
        });
}

module.exports = {
    add_word,
    get_words,
}