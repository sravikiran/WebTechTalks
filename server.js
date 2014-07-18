var express=require('express');
var http=require('http');
var path = require('path');
var bodyParser=require('body-parser');

var techTalksData = require('./data/techTalks');

var app = express();
app.use(bodyParser());

app.get('/api/techTalks', function(request, response){
    var talks=techTalksData.getAllTalks();
    if(talks.length > 0){
        response.send(talks);
    }
    else{
        response.send(500,{errorText:'No talks found'});
    }
});

app.get('/api/techTalks/:title', function (request, response) {
    if(!request.params.title){
        response.send(500,{errorText:'Title not sent'});
    }
    else{
        var talk=techTalksData.getATalk(request.params.title);
        if(talk.title){
            response.send(talk);
        }
        else{
            response.send(null);
        }
    }
});

app.post('/api/techTalks', function(request, response){
    var newTalk=request.body;
    if(!newTalk.title){
        response.send(500,{errorText:'No data found to add'});
    }
    techTalksData.addTalk(newTalk);
    response.send(200,{message: 'New talk added to the list'});
});

app.put('/api/techTalks/:title', function(request, response){
    if(!request.params.title){
        response.send(500,{errorText:'Title not sent'});
    }
    else if(!request.body.title){
        response.send(500,{errorText:'No data found to edit'});
    }
    else {
        var talkTitle = request.params.title;
        var result = techTalksData.editTalk(request.body);
        if(result === 0){
            response.send(200,{message:'Talk updated'});
        }
        else{
            response.send(500,{errorText:'Talk not found in the list'});
        }
    }
});

app.delete('/api/techTalks/:title',function(request, response){
    if(!request.params.title){
        response.send(500,{errorText:'Title not sent'});
    }
    else{
        var result=techTalksData.deleteTalk(request.params.title);
        if(result === 0){
            response.send(200,{message:'Talk deleted'});
        }
        else{
            response.send(500,{errorText:'Talk not found in the list'});
        }
    }
});

app.get('/', function(request, response){
    response.sendfile('views/Home.html');
});

app.get('/tests', function(request, response){
    response.sendfile('public/tests/TestRunner.html');
});

app.get('/sampleTests', function(request, response){
    response.sendfile('public/tests/SampleTestRunner.html');
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(3000);