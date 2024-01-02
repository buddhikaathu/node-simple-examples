const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url==='/') res.write('Welcome to our Home page') 
    if (req.url==='/about') res.write('Welcome to our about page') 
    res.end('Opphs!!!!!! try again');
    
})
server.listen(5000);