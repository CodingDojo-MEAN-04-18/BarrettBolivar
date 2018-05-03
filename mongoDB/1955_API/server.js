var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/persons');
const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});
mongoose.model('Person', PersonSchema); 
var Person = mongoose.model('Person')
mongoose.Promise  = global.Promise;

app.get('/', function(req, res){
    Person.find({})
        .then(people => res.json(people))
        .catch(error => res.json(error));
})  

app.get('/new/:name', function(req, res){
    Person.create(req.params)
      .then(person => res.json(person))
      .catch(error => res.json(error));
})

app.get('/delete/:name', function(req, res){
    Person.remove(req.params)
      .then(outcome => res.json(outcome))
      .catch(error => res.json(error));
})

app.get('/:name', function(req, res){
    Person.findOne(req.params)
        .then(person => { res.json(person); })
        .catch(error => res.json(error));
})

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server port : ${ port }`));