var express = require('express');
var controller = require('./controller');
var app = express();
app.set('view engine', 'ejs');

app.use(express.static('./public'));

controller(app);
// app.get('/', function(req, res){
//     res.render('result');
// });
app.listen(3000);

console.log('listening to port 3000');