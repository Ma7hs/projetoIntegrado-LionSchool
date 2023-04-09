'use strict'

import { fetchStudent } from "./api.js";
import { fetchData } from "./api.js";

var id = localStorage.getItem('id_card')

const courseStudents = await fetchStudent(id);
const courseTitle = await fetchData();
const ds = courseTitle.cursos[0].nome.replace("-", "").replace("001", "")
const rds = courseTitle.cursos[1].nome.replace("-", "").replace("002", "")


const createTitle = () => {
    const ds = courseTitle.cursos[0].nome
    const rds = courseTitle.cursos[1].nome
    const createTitleCourse = document.createElement('h1')
    createTitleCourse.classList.add('title-course')
    if (id == 'DS') {
        createTitleCourse.textContent = ds
        console.log(createTitleCourse);
    } else if (id == 'RDS') {
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
        cardAluno.setAttribute('data-status', 'finalizado');
    } else {
        cardAluno.classList.add('students__studying')
        cardAluno.setAttribute('data-status', 'cursando');
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

    const filtro = () => {
       const teste =  document.getElementById('select').addEventListener('change', function(){
            const stausSelecionado = this.value
            console.log(stausSelecionado);
            
            if(stausSelecionado == 'cursando'){
                const agora = cardAluno.getAttribute == 'finalizado'
                console.log(agora);
                if(agora == 'finalizado'){
                    cardAluno.style.display = 'none'
                }
            }
            
            }
        )
    }

    filtro()

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