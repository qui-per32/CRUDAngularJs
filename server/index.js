'use strict'
const Express = require('express'),
      BodyParser = require('body-parser'),
      Path = require('path');

let fs = require('fs');


const App = Express();

App.use(BodyParser.urlencoded({extended:false}));
App.use(BodyParser.json());
App.use(Express.static(Path.join(__dirname,'public')));


App.post('/savePaciente',(req, res, next)=>{
    let nhc = req.body.nhc;
    let nombre = req.body.nombre;
    let primerApellido = req.body.primerApellido;
    let segundoApellido = req.body.segundoApellido;
    let genero = req.body.genero;
    let fechaNacimiento = req.body.fechaNacimiento;
    let nifoPasaporte = req.body.nifoPasaporte;
    let calle = req.body.calle;
    let numero = req.body.numero;
    let puerta = req.body.puerta;
    let codigoPostal = req.body.codigoPostal;
    let ciudad = req.body.ciudad;
    let nombreAseguradora = req.body.nombreAseguradora;
    let tipoSeguro = req.body.tipoSeguro;
    let numeroTarjeta = req.body.numeroTarjeta;
    let registerData = { ...req.body};
    console.log(registerData);

    
    fs.writeFile('paciente.json', JSON.stringify(registerData, null, 2), 'utf8', (err) => {
        if(err) throw err;
        console.log('data was saved'+ registerData);
        
    })
})

App.post('/saveProfesional', (req, res, next) => {
    let colegiado = req.body.numeroColegiado;
    let nombre = req.body.nombre;
    let primerApellido = req.body.primerApellido;
    let segundoApellido = req.body.segundoApellido;
    let genero = req.body.genero;
    let fechaNacimiento = req.body.fechaNacimiento;
    let nifoPasaporte = req.body.nifoPasaporte;
    let tipoProfesional = req.body.tipoProfesional;
    let calle = req.body.calle;
    let numero = req.body.numero;
    let puerta = req.body.puerta;
    let codigoPostal = req.body.codigoPostal;
    let ciudad = req.body.ciudad;
    let nombreAseguradora = req.body.nombreAseguradora;
    let tipoSeguro = req.body.tipoSeguro;
    let numeroTarjeta = req.body.numeroTarjeta;
    let registerData = { ...req.body};
    console.log(registerData);


    fs.appendFile('profesional.json', JSON.stringify(registerData,null, 4), 'utf8', (err) => {
        if (err) throw err;
        console.log('data was saved' + registerData);

    })
})

App.post('/editProfesionales', (req, res, next) => {
    let colegiado = req.body.numeroColegiado;
    let nombre = req.body.nombre;
    let primerApellido = req.body.primerApellido;
    let segundoApellido = req.body.segundoApellido;
    let genero = req.body.genero;
    let fechaNacimiento = req.body.fechaNacimiento;
    let nifoPasaporte = req.body.nifoPasaporte;
    let tipoProfesional = req.body.tipoProfesional;
    let calle = req.body.calle;
    let numero = req.body.numero;
    let puerta = req.body.puerta;
    let codigoPostal = req.body.codigoPostal;
    let ciudad = req.body.ciudad;
    let nombreAseguradora = req.body.nombreAseguradora;
    let tipoSeguro = req.body.tipoSeguro;
    let numeroTarjeta = req.body.numeroTarjeta;
    let registerData = { ...req.body};
    console.log(registerData);


    fs.writeFile('profesional.json', JSON.stringify(registerData, null, 2), 'utf8', (err) => {
        if (err) throw err;
        console.log('data was saved' + registerData);

    })
})

App.get('*',(req,res,next)=>{
    if(req.accepts('html')){
        res.sendFile(Path.join(__dirname,
            'public','index.html'))
          
    }else{
        next()
    }
});

App.listen(3000,()=>console.log("El servidor esta arrancado puerto 3000"));
