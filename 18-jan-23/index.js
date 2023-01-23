const http = require('http')

const server = http.createServer((req, res) => {


    //Routing

    // res.setHeader('Content-Type', 'text/html');
    // let url = req.url;
    // if(url == '/'){
    //     res.write('home')
    // }else if(url == '/about'){
    //     res.write('we are awesome')
    // }else{
    //     res.write('page not found')
    // }
    // res.write('<!DOCTYPE html>');
    // res.write('<html>');
    // res.write('<head><title>AirCampus</title></head>');
    // res.write('<body><h1>hello</h1></body>');
    // res.write('</html>');
    // res.end();




    res.setHeader('Content-Type', 'text/html');
    let url = req.url;
    if(url == '/'){
        res.write('<!DOCTYPE html>');
        res.write('<html>')
        res.write('<head><title>AirCampus</title></head>');
        res.write(`
        <body>
        <form method="post" action="/message">
        <input type="text" name="name"/>
        <button type="submit">submit</button>
        </form>
        </body>
        `)
        res.write('</html>');
        res.end()
    }else if(url == '/message'){
        const body = []
        req.on('data', (chunk)=>{
            
                console.log(chunk);
                body.push(chunk)
            
        });

        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody);
        })
        console.log(req.body);
    }
});

server.listen(3000)