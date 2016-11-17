var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');

var massiveInstance = massive.connectSync({
  connectionString : 'postgres://postgres:pgadminpass@localhost/sql_massive_node'
});

var app = module.exports = express();
app.use(bodyParser.json());

app.set('db', massiveInstance);

var db = app.get('db')
var productCtrl = require('./productCtrl.js');

var port = 3000;


app.post('/api/product', productCtrl.Create);
app.get('/api/products', productCtrl.GetAll);
app.get('/api/product/:productId', productCtrl.GetOne);
app.put('/api/product/:productId', productCtrl.Update);
app.delete('/api/product/:productId', productCtrl.Delete);



















app.listen(port, function() {
  console.log("Started server on port", port);
});
