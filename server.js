const http=require('http');

const server =http.createServer((req,res)=>{
    console.log('My name is Anil Kharatmol',req.url,req.method,req.headers);
    const url =req.url;
    const method =req.method;

    if (url==='/') {
        res.write('<html>')
        res.write('<header><title>Enter message</title></header>')
        res.write(`<body><form action= "/message" method="POST"><input type="text"/><button type="submit">Send</button></form></body>`)
        res.write('<html>')
        res.write('</html>')
        return res.end();
    }

    if (url=== "/home") {
        res.write('<html>')
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>')
       return res.end();
    }

    if (url=== "/about") {
        res.write('<html>')
        res.write('<body><h1>Welcome to About us page</h1></body>')
        res.write('</html>')
       return res.end();
    }

    if (url=== "/node") {
        res.write('<html>')
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</html>')
       return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<header><title>My first node server</title></header>')
    res.write('<body><h1>Welcome to my node js server</h1></body>')
    res.write('<html>')
    res.write('</html>')
    res.end();
})

server.listen(4000)