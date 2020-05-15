const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
  var heightFt = Number(req.body.heightFt);
  var heightIn = Number(req.body.heightIn);
  var weight = Number(req.body.weight);
  var feetToInches = heightFt * 12;
  var totalHeight = Number(feetToInches + heightIn);
  var bmi = 703 * Math.floor((weight / (totalHeight ** 2)));
  console.log("heightFt: " + heightFt);
  console.log("heightIn: " + heightIn);
  console.log("wieght: " + weight);
  console.log("feetToInches: " + feetToInches);
  console.log("totalHeight: " + totalHeight);
  console.log("bmi: " + bmi);

  res.send('Your BMI is ' + bmi);
})

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
