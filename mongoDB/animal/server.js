var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost/quoting');
const AnimalSchema = new mongoose.Schema({
    Animal: String,
    Data: String,
});
mongoose.model('Animal', AnimalSchema); 
var animal = mongoose.model('Animal') 
mongoose.Promise = global.Promise;



app.get('/', function(req, res) {
    animal.find({}, function(err, animal){
        console.log(animal);
        
        if (err) { console.log(err); }
        else { res.render('index', { animal: animal }); }
    })
})

app.get('/animal/new', function(req, res) {
    res.render('animal')
})

app.post('/', function(req, res) {
    animal.create(req.body, function(err) {
        if (err) { console.log(err); }
        else { res.redirect('/'); }
    });
});

app.get('/:id', function(req, res){
    animal.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('display', { animal: response[0] });
    });
});

app.get('/:id/edit/', function(req, res){
    animal.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('edit', { animal: response[0] });
    })
});

//had to get help on this one.
app.post('/:id', function(req, res){
    animal.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
});

app.post('/:id/delete', function(req, res){
    animal.remove({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});