/* var express = require('express')
var app = express()
var fs=require('fs');
var buffer= new Buffer(5024)

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
                        fs.close(data, function(error){
                            if (error){
                                console.log(error);
                            }
                        })
        })
})
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at :" + app.get('port'))
})
*/ 

/* var express = require('express')
var app = express()


app.set('port', (process.env.PORT || 8080))
//app.use(express.static(__dirname + '/public'))

//__dirname returns the directory that the currently executing script is in.

app.get('/', function(request, response) {
    response.sendFile('public/index.html',{root:__dirname})

/* sends an entire HTTP response to the client,                                                                                                                                     
 including headers and content,                                                                                                                                                     
 which is why you can only call once

})
 
app.listen(app.get('port'), function() {
  console.log("Node app is running at :" + app.get('port'))
})
*/


var monday = [

        {

            'name'     : 'Write a tutorial',

            'duration' : 180

        },

        {

            'name'     : 'Some web development',

            'duration' : 120

        }

    ];

 

var tuesday = [

        {

            'name'     : 'Keep writing that tutorial',

            'duration' : 240

        },

        {

            'name'     : 'Some more web development',

            'duration' : 180

        },

        {

            'name'     : 'A whole lot of nothing',

            'duration'  : 240

        }

    ];

     

var tasks = [monday, tuesday];