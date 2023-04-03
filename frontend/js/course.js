'use strict'

import { fetchStudent } from "./api.js";

var id = localStorage.getItem('id_card')
const courseStudents = await fetchStudent(id);


const createCardAluno = (aluno) => {
    const card = document.createElement('div')
    card.classList.add('students__card')

    const img = document.createElement ( 'img' )
    img.classList.add('students__image')
    img.src = aluno.foto

    const name = document.createElement('h1')
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

