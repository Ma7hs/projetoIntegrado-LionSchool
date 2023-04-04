'use strict'

import { fetchStudent } from "./api.js";
import { fetchData } from "./api.js";

var id = localStorage.getItem('id_card')
const courseStudents = await fetchStudent(id);

const courseTitle = await fetchData();


// const createTitle = (curso) => {
//     const titleCourse = document.createElement('h1')
//     titleCourse.classList.add('course__title')
//     titleCourse.textContent = curso.nome

//     titleCourse.append(titleCourse)
//     return titleCourse
// }

// createTitle()
// console.log(createTitle)

const createCardAluno = (aluno) => {

    // criando card alunos
    const card = document.createElement('div')
    if(aluno.status == "Finalizado"){
        card.classList.add('students__finished')
    } else {
        card.classList.add('students__studying')
    }
    const img = document.createElement ( 'img' )
    img.classList.add('students__image')
    img.src = aluno.foto

    const name = document.createElement('h3')
    name.classList.add('students__name')
    name.textContent = aluno.nome
    
    card.append(img, name)
    return card
}

const loadStudents = () => {
    const container = document.getElementById('container-students')
    const alunos = courseStudents.alunos.map(createCardAluno)
    container.replaceChildren(...alunos)
}

loadStudents()

