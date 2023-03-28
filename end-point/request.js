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
    let cursos = {}
    let statusCode
    if (listCursos) {
        cursos = listCursos;
        statusCode = 200
    } else {
        statusCode = 400
    }
    response.status(statusCode)
    response.json(cursos)

})

app.get('/v1/lion-school/alunos', cors(), async function (request, response, next) {
    let listAlunos = lionSchool.getListaAlunos()
    let alunos = {}
    let statusCode
    if (listAlunos) {
        alunos = listAlunos;
        statusCode = 200
    } else {
        statusCode = 400
    }
    response.status(statusCode)
    response.json(alunos)

})

app.get(`/v1/lion-school/alunos/:matricula`, cors(), async function (request, response, next) {
    let matricula = request.params.matricula
    let aluno = lionSchool.getAlunoMatricula(matricula)
    let info_aluno = {}
    let statusCode


    if (matricula == '' || matricula == undefined || matricula.length != 11 || isNaN(matricula)) {
        statusCode = 400
        info_aluno.message = ('Nao foi possivel realizar a requisicao pois deve haver algum erro na matricula')
    }else{
          if (aluno) {
        info_aluno = aluno;
        statusCode = 200
    } else {
        statusCode = 400
    }
    }

  
    response.status(statusCode)
    response.json(info_aluno)

})




app.listen(8080, function () {
    console.log('Servidor Lion School Agurdando Resquisições na porta 8080')
})