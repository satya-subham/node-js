const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let url = req.url;
    if(url == '/'){
        res.write('home')
    }else if(url == '/about'){
        res.write('we are awesome')
    }else{
        res.write('page not found')
    }
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head><title>AirCampus</title></head>');
    res.write('<body><h1>hello</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3001)