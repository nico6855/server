const http = require('http')//Library Created
const fs = require('fs')
const port = 3000 //Variable created to tell server what port to listen to 

const server = http.createServer(function(req,res){ //server variable (Request, Response)
    res.writeHead(200, {'Content-Type': 'text/html'}) //text/html indicates that am html doc is sent 
    fs.readFile('server.html', function(error, data){ //reads html file
        if(error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){ 
    if(error) {
        console.log('Something went wrong', error) //Log the error message
    } else {
        console.log('Server is listening on port' + port) //Log listening 
    } //enter "node" with file name 
})