var mongoose = require('mongoose')
var User = mongoose.model('user')

module.exports = {
  create: (req, res) => {
    user = new User(req.body);
    user.save((err) => {
      if(err) {
        console.log(err);
      } else {
        console.log("SUCCESS");
        res.send(user);
      }
    })
  },
  getUser: (req, res) => {
    User.find({username:req.body.username}, function(err, user){
      if(user.length > 0) {
        console.log(user);
        if(user[0].password != req.body.password){
          var message = "Password is not correct";
          res.json(message);
          console.log()
        }
        else{
          res.json(user[0]);
      }
     } 
     else {
        console.log(err);
        var message_two = "Username does not exist"
        res.json(message_two)
      }
    })
      
  }
 }