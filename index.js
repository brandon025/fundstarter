var express = require('express')
var app = express()
var fs=require('fs');

app.set('port', (process.env.PORT || 8080))
//app.use(express.static(__dirname + '/public'))

//__dirname returns the directory that the currently executing script is in.

app.get('/', function(request, response) {
    // response.sendFile('public/index.html',{root:__dirname})
        fs.open('public/index.html', 'r+', function(err, data) {
                if (err){
                        return console.error(err);
                }
        console.log("Successful reading");
        fs.read(data, buffer, 0, buffer.length, 0, function(error, bytes){
                if (error){
                        console.log(error);
                }
                        response.contentType("text/html");
                        response.send(buffer.slice(0, bytes).toString());
        })
})
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at :" + app.get('port'))
})
