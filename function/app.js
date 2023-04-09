const cursos = require("../recursos/cursos.js");
const alunos = require("../recursos/alunos.js");

const getCursos = () => {
  let cursosList = [];
  let cursosJson = {};

  cursos.cursos.forEach((curso) => {
    let cursos = {
      nome: curso.nome,
      sigla: curso.sigla,
      carga: curso.carga,
      icone: curso.icone
    }
    cursosList.push(cursos);
  });

  cursosJson = {
    cursos: cursosList,
  };
  return cursosJson;
};

const getListaAlunos = () => {
  let alunosList = [];
  let alunosJson = {};

  alunos.alunos.forEach((aluno) => {
    let alunoJson = {
      nome: aluno.nome,
      matricula: aluno.matricula,
    };

    alunosList.push(alunoJson);
  });

  alunosJson = {
    alunos: alunosList,
    qtde_alunos: alunosList.length,
  };

  return alunosJson;
};

const getAlunoMatricula = (matricula) => {
  let alunoList = [];
  let alunoJson = {};
  let status = false;

  alunos.alunos.forEach((aluno) => {
    if (matricula == aluno.matricula) {
      let infoCurso = aluno.curso[0].nome
      let infoAluno = {
        nome: aluno.nome,
        matricula: aluno.matricula,
        image: aluno.foto,
        sexo: aluno.sexo,
        curso: infoCurso,
        status: aluno.status,
      };
      alunoList.push(infoAluno);
    }
    alunoJson = {
      aluno: alunoList,
    };
    status = true;
  });

  if (status == true) {
    return alunoJson;
  } else {
    return status;
  }
};

const getAlunosCurso = (curso, status) => {
  let alunosJson = {};
  let alunosDS = [];
  let alunosRDS = [];
  let funStatus = false;

  alunos.alunos.forEach((aluno) => {
    const cursoAluno = aluno.curso[0].sigla;
    const statusAluno = aluno.status;
    if (curso != undefined && status != undefined) {
      if (cursoAluno == curso) {
        let infoAluno = {
          nome: aluno.nome,
          matricula: aluno.matricula,
          foto: aluno.foto,
          status: aluno.status
        }
        if (cursoAluno == "RDS" && statusAluno == status) {
          alunosRDS.push(infoAluno);
          alunosJson = {
            alunos: alunosRDS,
          };

        } else if (cursoAluno == "DS" && statusAluno == status) {
          alunosDS.push(infoAluno);
          alunosJson = {
            alunos: alunosDS
          };
        }
      }
      funStatus = true;
    } else if (curso != undefined && status == undefined) {
      if (cursoAluno == curso) {
        let infoAluno = {
          nome: aluno.nome,
          matricula: aluno.matricula, 
          foto: aluno.foto,
          status: aluno.status
        }
        if (cursoAluno == "RDS") {
          alunosRDS.push(infoAluno);
          alunosJson = {
            alunos: alunosRDS,
          };
        } else if (cursoAluno == "DS") {
          alunosDS.push(infoAluno);
          alunosJson = {
            alunos: alunosDS,
          };
        }
      }
      funStatus = true;
    }
  })

  if (funStatus == true) {
    return alunosJson;
  } else {
    return funStatus;
  }
}


const getStatusAluno = (status, ano) => {
  let alunosCursando = [];
  let alunosFinalzados = [];
  let alunosJson = {};
  let funStatus = false;

  alunos.alunos.forEach((aluno) => {
    const statusAluno = aluno.status.toLowerCase();
    const anoConclusao = aluno.curso[0].conclusao;
    if (status != undefined && ano != undefined) {
      if (statusAluno == status) {
        if (statusAluno == "cursando" && anoConclusao == ano) {
          alunosCursando.push(aluno.nome);
          alunosJson = {
            alunos_cursando: alunosCursando,
            ano_conclusao: ano,
            qntd_alunos: alunosCursando.length,
          };
        } else if (statusAluno == "finalizado" && anoConclusao == ano) {
          alunosFinalzados.push({
            aluno: aluno.nome,
            ano_conclusao: aluno.curso[0].conclusao
          });
          alunosJson = {
            alunos_finalizados: alunosFinalzados,
            qntd_alunos: alunosFinalzados.length,
          };
        }
        funStatus = true;
      }
    } else {
      if (statusAluno == status) {
        if (statusAluno == "cursando") {
          alunosCursando.push(aluno.nome);
          alunosJson = {
            alunos_cursando: alunosCursando,
            qntd_alunos: alunosCursando.length,
          };
        } else if (statusAluno == "finalizado") {
          alunosFinalzados.push(aluno.nome);
          alunosJson = {
            alunos_finalizados: alunosFinalzados,
            qntd_alunos: alunosFinalzados.length,
          };
        }
      }
      funStatus = true;
    }
  });



  return ((alunosFinalzados.length != 0) || (alunosCursando.length != 0)) ? alunosJson : false

};



const getStatusDisciplina = (matricula) => {
  let json = {}
  let status = false
  alunos.alunos.forEach((aluno) => {
    if (matricula == aluno.matricula) {
      aluno.curso.map(curso => {
        let disciplinas = curso.disciplinas.map(disciplina => {
          let jsonDisciplinas = {
            nome: disciplina.nome,
            media: disciplina.media,
            status: disciplina.status
          }
          return jsonDisciplinas
        })
        json = {
          nome: aluno.nome,
          matricula: aluno.matricula,
          foto: aluno.foto,
          curso: aluno.curso[0].nome,
          disciplinas: disciplinas
        }
      })
      status = true
    }
  })
  if (status == true) {
    return json
  } else {
    return false
  }
}

module.exports = {
  getStatusAluno,
  getAlunosCurso,
  getAlunoMatricula,
  getListaAlunos,
  getCursos,
  getStatusDisciplina
};