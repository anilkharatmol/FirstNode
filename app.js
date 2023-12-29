
const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log('In the middleware');
    next();
})
app.use((req,res,next)=>{
    console.log('In second middleware');
    res.send({key:'value'})
    // res.send('<h1>Hello from Express JS</h1>')
})

app.listen(4000)