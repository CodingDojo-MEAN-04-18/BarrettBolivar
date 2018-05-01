var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'codingdojorocks'}));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    
   
    res.render("index")
})

const server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

function isUser(user) {
    const usersCount = users.length;
    for (var i = 0; i < usersCount; i++) {
        if (user == users[i]) {
        return true;
        }
    }
    return false;
}

const io = require("socket.io").listen(server)
const users = [];
const messages = [];
io.sockets.on("connection", function(socket) {
    socket.on("load", function(data) {
        console.log(data);
        
        const existingUser = isUser(data.user);
        if (!existingUser) {
            currentUser = data.user;
            users.push(data.user);
        }
        
        socket.emit('joined', data);
    });
    socket.on("nMessage", function(data) {
        console.log('new message ');
        console.log(data);
        
        
        messages.push({ name: currentUser, message: data.message });
        io.emit("pmessage", { nMessage: data.message, user: currentUser });
    });
});