

// This is project entry point. If you start the
// server by typing node expresstut.js and then open the
// browser at localhost:3000 you'll get a 404 error if
// you haven't defined any routes
// Imports
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//imported filesystem
var fs = require('fs');

var app = express();

var router = express.Router()
var realtimeRoute = express.Router()
var controlRoute = express.Router()

app.disable('x-powered-by');


// //write to json
// let data = JSON.stringify(rData);
// fs.writeFileSync('./realtimedb.json', data);


//using RESTful
//routing request to add user
//app.post('/users/:userid',1001);


//define port to run on
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'build')));


app.use('/', router);
//middleware bodyparser
router.use(bodyParser.json())







// route realtimep.handlebars - go realtime > show
router.use('/realtime', realtimeRoute )


//access /realtime/show
realtimeRoute.get('/reactshow', (req, res) => {
//   // random number generator
//  var rNum = Math.floor((Math.random() * 999) + 1);
//  let rData = {
//     data: rNum
// };
// //write random data number to json when is page accessed
// let data = JSON.stringify(rData);
// fs.writeFileSync('./realtimedb.json', data);
var mydata = [1,2,3,4]

console.log(req.query.getRtJson)
if (req.query.getRtJson) {

  return res.send(mydata);
}

//load and parse realtimedbJSON database to a variable
var text = fs.readFileSync('./realtimedb.json','utf8')
text = JSON.parse(text)

 });





 //access /realtime/data
realtimeRoute.get('/data', (req, res) => {

 // random number generator
 var rNum = Math.floor((Math.random() * 999) + 1);
 let rData = {
    data: rNum
};
//write random data number to json when is page accessed
let data = JSON.stringify(rData);
fs.writeFileSync('./realtimedb.json', data);

//load and parse realtimedbJSON database to a variable
var text = fs.readFileSync('./realtimedb.json','utf8')
text = JSON.parse(text)
//console.log (typeof text)
res.send(text)
})



//route to control page
router.use('/users', controlRoute )
// access /control/
controlRoute.get('/control', (req, res) => {

});

// router.get('/test', (req, res) => {
//   return res.send('hello world')
// });

//render react app
router.get('/*', (req, res) => {

  return res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate');
});
