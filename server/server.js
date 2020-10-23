const express = require('express');

const app=express();


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,MATCH,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
const data={
  title:'Hello Dears!',
  link:'https://github.com/erfan-am'
}

app.get('/api/data',(req,res,next)=>{
    res.send(data)
})


const PORT=process.env.PORT || 9000;
app.listen(PORT,()=>{
  console.log('port is started on ' +PORT);
})
