const cursos = require("../recursos/cursos.js");
const alunos = require("../recursos/alunos.js");

const getCursos = () => {
  let cursosList = [];
  let cursosJson = {};

  cursos.cursos.forEach((curso) => {
    cursosList.push(curso.sigla);
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

const getAlunosCurso = (curso) => {
  let alunosJson = {};
  let alunosDS = [];
  let alunosRDS = [];
  let status = false;

  alunos.alunos.forEach((aluno) => {
    const cursoAluno = aluno.curso[0].sigla;
    if (cursoAluno == curso) {
      if (cursoAluno == "RDS") {
        alunosRDS.push(aluno.nome);
        alunosJson = {
          alunos_redes: alunosRDS,
        };
      } else if (cursoAluno == "DS") {
        alunosDS.push(aluno.nome);
        alunosJson = {
          alunos_ds: alunosDS,
        };
      }
    }
    status = true;
  });
  if (status == true) {
    return alunosJson;
  } else {
    status;
  }
};


const getStatusAluno = (status) => {
  let alunosCursando = [];
  let alunosFinalzados = [];
  let alunosJson = {};
  let funStatus = false;

  alunos.alunos.forEach((aluno) => {
    const statusAluno = aluno.status.toLowerCase();
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
          alunos_finalzados: alunosFinalzados,
          qntd_alunos: alunosFinalzados.length,
        };
      }
      funStatus = true;
    }
  });

  if (funStatus == true) {
    return alunosJson;
  } else {
    return funStatus;
  } 

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

// const teste = (matricula) => {
//   let json = {}
//   let status = false
//   alunos.alunos.forEach((aluno) => {
//     if (matricula == aluno.matricula) {
//       json = {
//         nome: aluno.nome,
//         matricula: aluno.matricula,
//         curso: aluno.curso[0].nome,
//         disciplina: aluno.curso[0].disciplinas
//       }
//       status = true
//     }
//   })
//   if (status == true) {
//     return json
//   } else {
//     return false
//   }
// }

// console.log(teste(20151001007))

module.exports = {
  getStatusAluno,
  getAlunosCurso,
  getAlunoMatricula,
  getListaAlunos,
  getCursos,
  getStatusDisciplina
};
