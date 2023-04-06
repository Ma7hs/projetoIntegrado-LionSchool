'use strict'

import { fetchStudent } from "./api.js";
import { fetchData } from "./api.js";
import { fetchStatus } from "./api.js";

var id = localStorage.getItem('id_card')
console.log(id);
const courseStudents = await fetchStudent(id);
console.log(courseStudents);


const courseTitle = await fetchData();

const ds = courseTitle.cursos[0].nome
const rds = courseTitle.cursos[1].nome

const createTitle = () => {
    const createTitleCourse = document.createElement('h1')
    createTitleCourse.classList.add('title-course')
    if(id == 'DS'){
        createTitleCourse.textContent = ds
        console.log(createTitleCourse);
    }else if(id == 'RDS'){
        createTitleCourse.textContent = rds
        console.log(createTitleCourse);
    }
    return createTitleCourse
}


const createCardAluno = (aluno) => {
    const cardAluno = document.createElement('a')
    cardAluno.href = "http://127.0.0.1:5500/frontend/pages/student.html"
    cardAluno.target = 'blank_'

    if (aluno.status == "Finalizado") {
        cardAluno.classList.add('students__finished')
    } else {
        cardAluno.classList.add('students__studying')
    }

    const img = document.createElement('img')
    img.classList.add('students__image')
    img.src = aluno.foto

    const name = document.createElement('h3')
    name.classList.add('students__name')
    name.textContent = aluno.nome.toUpperCase()

    cardAluno.append(img, name)
    cardAluno.id = aluno.matricula
    cardAluno.onclick = () => {
        var storage = localStorage.setItem('id_cardAluno', cardAluno.id)
        console.log(storage);
    }
    return cardAluno
}

const loadStudents = () => {
    const box = document.getElementById('box')
    const container = document.getElementById('container-students')
    const alunos = courseStudents.alunos.map(createCardAluno)
    container.append(...alunos)
    box.replaceChildren(createTitle(), container)
   
}   

loadStudents()

