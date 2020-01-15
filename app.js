var express = require("express"),
   app = express();  
    
//require routes  
   
var indexRoutes  = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(indexRoutes);

app.listen(3000, function(){
  console.log("server started");  
});   

//RUN APP with Nodedemon via command: npm run dev