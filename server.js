const http=require('http');
const fs=require('fs');
const path = require('path');


const server =http.createServer((req,res)=>{
    // console.log('My name is Anil Kharatmol',req.url,req.method,req.headers);
    const url =req.url;
    const method =req.method;

    if (url==='/') {

        const filePath =path.join(__dirname,"message.txt");

        fs.readFile(filePath,{encoding:'utf-8'},(err,data)=>{
            res.write('<html>')
            res.write('<header><title>Enter message</title></header>')
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>')
            res.write('</html>')
            return res.end();
        })
    }


  else  if (url=== "/message" && method==="POST") {
        const body=[];

        req.on('data',(chunk)=>{
           console.log(chunk);
            body.push(chunk);
        })

       return req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
         console.log(parsedBody);
         fs.writeFile('message.txt',message, (err)=>{
             res.statusCode=302;
             res.setHeader('Location','/')
             return res.end();
         });
        })  
    }
    // if (url=== "/home") {
    //     res.write('<html>')
    //     res.write('<body><h1>Welcome home</h1></body>')
    //     res.write('</html>')
    //    return res.end();
    // }

    // if (url=== "/about") {
    //     res.write('<html>')
    //     res.write('<body><h1>Welcome to About us page</h1></body>')
    //     res.write('</html>')
    //    return res.end();
    // }

    // if (url=== "/node") {
    //     res.write('<html>')
    //     res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    //     res.write('</html>')
    //    return res.end();
    // }

    else {
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<header><title>My first node server</title></header>')
    res.write('<body><h1>Welcome to my node js server</h1></body>')
    res.write('<html>')
    res.write('</html>')
    res.end();
    }
})

server.listen(4000)