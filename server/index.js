'use strict'
const Express = require('express'),
      BodyParser = require('body-parser'),
      Path = require('path');

const App = Express();

App.use(BodyParser.urlencoded({extended:false}));
App.use(BodyParser.json());
App.use(Express.static(Path.join(__dirname,'public')));


// App.get('/data',(req, res, next)=>{
    
      
//         res.header('Acces-Control-Allow-Origin', '*');
//         res.header('Acces-Control-Methods', 'GET,POST,DELETE,OPTIONS');
//         res.header('Acces-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, X-Custom-Header Access-Control-Request-Headers,Access-Control-Allow-Origin,Authorization');
            
//         res.json({"user":"Xavi"});
// })

App.get('*',(req,res,next)=>{
    if(req.accepts('html')){
        res.sendFile(Path.join(__dirname,
            'public','index.html'))
          
    }else{
        next()
    }
});

App.listen(3000,()=>console.log("El servidor esta arrancado puerto 3000"));
