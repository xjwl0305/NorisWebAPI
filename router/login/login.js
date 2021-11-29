//var mongoose = require('mongoose');
var mongoClient = require('mongodb').MongoClient;
const express = require('express');
var router = express.Router();
const app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));

module.exports = router;
router.post('', async (req, res) => {
    mongoClient.connect('mongodb://3.35.4.244:27017/user_info', function (err, database){
        if(err != null){
            console.log(err);
        }else{
            db = database.db('noris');
            db.collection('user_info').findOne({'id': req.body.id, 'password': req.body.password},function(err, items){
              if(err != null){
                  const response = {
                      state : "500"
                  }
                  res.send(response);
              }else if(items == null){
                  const response = {
                      status : "400"
                  }
                  res.send(response);
              }else{
                  const response = {
                      status : "200",
                      uid : items._id.toString()
                  };
                  res.send(response);
              }
            })
        }
    });
});