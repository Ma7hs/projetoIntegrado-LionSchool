const express = require('express');
const cors = require('cors'); 
const bodyParser = require('body-parser'); 
const lionSchool = require('../function/app.js');


const app = express();

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*'); 
    response.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS'); 
    app.use(cors());
    next();
});

app.get('/v1/lion-school/cursos', cors(), async function (request, response, next) {
    let listCursos = lionSchool.getCursos()
    if (listCursos) {
        response.json(listCursos);  
        response.status(200);
    } else {
        response.status(500)
    }
})

app.listen(8080, function () {
    console.log('Servidor Lion School Agurdando Resquisições na porta 8080')
})