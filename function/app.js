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
      let infoCurso = aluno.curso.map((curso) => {
        let cursoNome = {
          sigla: curso.sigla,
          nome: curso.nome,
        };
        return cursoNome;
      });
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

const getStatus = (status) => {
  let alunosCursando = [];
  let alunosFinalzados = [];
  let alunosJson = {};
  let funStatus = false;

  alunos.alunos.forEach((aluno) => {
    const statusAluno = aluno.status;
    if (statusAluno == status) {
      if (statusAluno == "Cursando") {
        alunosCursando.push(aluno.nome);
        alunosJson = {
          alunos_cursando: alunosCursando,
          qntd_alunos: alunosCursando.length,
        };
      } else if (statusAluno == "Finalizado") {
        alunosFinalzados.push(aluno.nome);
        alunosJson = {
          alunosFinalzados: alunosFinalzados,
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

module.exports = {
  getStatus,
  getAlunosCurso,
  getAlunoMatricula,
  getListaAlunos,
  getCursos,
};
