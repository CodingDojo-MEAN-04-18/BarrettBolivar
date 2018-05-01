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
const QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
});
mongoose.model('Quote', QuoteSchema); 
var Quote = mongoose.model('Quote') 
mongoose.Promise = global.Promise;



app.get('/', function(req, res) {
    res.render('index');
})

app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes) {
        if (err) { console.log(err); }
        else { res.render('quotes', { quotes: quotes }); }
      });
});

app.post('/quotes', function(req, res) {
    Quote.create(req.body, function(err) {
        if (err) { console.log(err); }
        else { res.redirect('/quotes'); }
    });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});