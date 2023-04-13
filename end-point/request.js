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
    } else {
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

app.get(`/v1/lion-school/alunos/:curso/:status`, cors(), async function (request, response, next) {
    let curso = request.params.curso.toUpperCase()
    let status = request.params.status.charAt(0).toUpperCase() + request.params.status.slice(1)
    let alunos 

    if(status == 'Todos'){
        alunos = lionSchool.getAlunosCurso(curso)
    }else if(status != undefined){
        alunos = lionSchool.getAlunosCurso(curso, status)
    }

    let info_curso = {}
    let statusCode
    if(curso == '' || curso == undefined || !isNaN(curso)){
        statusCode = 400
        info_curso.message = ('Nao foi possivel realizar a requisicao pois deve haver algum erro no momento de informar o curso')
    }else{
        if (alunos) {
            info_curso = alunos;
            statusCode = 200
        } else {
            statusCode = 400
        }   
    }
    response.status(statusCode)
    response.json(info_curso)   
})

app.get(`/v1/lion-school/status/alunos/`, cors(), async function (request, response, next) {
    let status = request.params.status  
    let status_aluno = lionSchool.getStatusAluno(status)
    let info_status = {}
    let statusCode

    if(status == '' || status == undefined || !isNaN(status)){
        statusCode = 400
        info_status.message = ('Nao foi possivel realizar a requisicao pois deve haver algum erro no momento de informar o curso')
    }

    if (status_aluno) {
        info_status = status_aluno;
        statusCode = 200
    } else {
        statusCode = 400
    }

    response.status(statusCode)
    response.json(info_status)
})

app.get(`/v1/lion-school/status/disciplinas/:matricula`, cors(), async function (request, response, next) {
    let matricula = request.params.matricula  
    let status_aluno = lionSchool.getStatusDisciplina(matricula)
    let info_status = {}
    let statusCode

    if(matricula == '' || matricula == undefined || isNaN(matricula) || matricula.length > 11){
        statusCode = 400
        info_status.message = ('Nao foi possivel realizar a requisicao pois deve haver algum erro no momento de informar o curso')
    }

    if (status_aluno) {
        info_status = status_aluno;
        statusCode = 200
    } else {
        statusCode = 400
    }

    response.status(statusCode)
    response.json(info_status)  
})



app.listen(8080, function () {
    console.log('Servidor Lion School Agurdando Resquisições na porta 8080')
})