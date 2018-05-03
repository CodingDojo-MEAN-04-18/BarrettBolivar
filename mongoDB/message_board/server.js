var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost/message_board');
const Schema = mongoose.Schema;
const MessageSchema = new mongoose.Schema({
	name: String,
	message: String,
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

MessageSchema.path('name').required(true, 'Name cannot be blank');
MessageSchema.path('message').required(true, 'Message cannot be blank');
mongoose.model("Message", MessageSchema);
const Message = mongoose.model("Message");

const CommentSchema = new mongoose.Schema({
	name: String,
	text: String,
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
});

CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('text').required(true, 'Comment cannot be blank');
mongoose.model("Comment", CommentSchema);
const Comment = mongoose.model("Comment");

mongoose.Promise = global.Promise;



app.get('/', function(req, res) {
    Message.find({}).populate('_comments').exec(function(err, messages) {
        res.render('index', { messages: messages });
  });
});

app.post('/messagePost', function(req, res) {
    var nMessage = new Message({ name: req.body.name, message: req.body.message });
	nMessage.save(function(err) {
		if (err) {
			console.log(err);
			res.redirect('/');
		} else {
			res.redirect('/');
		}
	})
});

app.post('/commentPost', function(req, res) {
    const messageId = req.params.id;
	Message.findOne({ _id: messageId }, function(err, message) {
		const nComment = new Comment({ name: req.body.name, text: req.body.comment });
		nComment._message = message._id;
		Message.update({ _id: message._id }, { $push: { _comments: nComment }}, function(err) {

		});
		nComment.save(function(err) {
			if (err) {
				console.log(err);
				res.render('index.ejs', { errors: nComment.errors });
			} else {
				console.log("comment added");
				res.redirect("/");
			}
		});
	});
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});