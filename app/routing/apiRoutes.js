var data = require('./../data/friends.js');
var bodyParser = require("body-parser");


function apiRoutes(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.get("/api/friends", function(req, res) {
      //res.sendFile(path.join(__dirname, "/app/data/friends.js"));
      res.json(data); 

    });
    
    app.post("/api/friends", function(req, res) {
        console.log("app post fired")
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of our body-parser middleware
      var newfriend = req.body;

      console.log(newfriend);
      console.log(data);
      var leastDif=41; //set higher than a perfectly different person could be
      for(var i=0;i<data.length;i++){ //loop through friends
          console.log("inside for loop for friends")
          console.log()
          var sum=0
          for (var j=0;j<data[i].scores.length;j++){//for each friend loop through scores
              sum = sum + Math.abs(newfriend['scores[]'][j]-data[i].scores[j]); //absolute sum
          }
          if (sum < leastDif){//use least sum to evaluate differences between friends. keep whoever is least different
              leastDif=sum;
              var closestPersonPosition=i; //stores array value of least different person
          }
          
      }
      data.push(newfriend);
      // data held elsewhere, how can we push the data?
      //characters.push(newcharacter);
    
      res.json(data[closestPersonPosition]); //send data back to request site.
    });
    
}

module.exports = apiRoutes;