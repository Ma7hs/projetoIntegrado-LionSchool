'use strict'

import { fetchStudent } from "./api.js";
import { fetchData } from "./api.js";

var id = localStorage.getItem('id_card')
console.log(id);
const courseStudents = await fetchStudent(id);
console.log(courseStudents);


const id = localStorage.getItem('id_card')
const courseTitle = await fetchData();
<<<<<<< HEAD
const selectedValue = localStorage.getItem('selected')
console.log(selectedValue);
const courseStudents = await fetchStudent(id, selectedValue)
const select = document.getElementById('select');
=======
const ds = courseTitle.cursos[0].nome.replace("-", "").replace("001", "")
const rds = courseTitle.cursos[1].nome.replace("-", "").replace("002", "")
>>>>>>> 993d9fa2c5ba7f6d12bcf5d546006ca4bfcaf667

select.addEventListener('change', () => {
    const valorSelecionado = select.value;
    localStorage.setItem('selected', valorSelecionado)
    location.reload()
});

const createTitle = () => {
    const ds = courseTitle.cursos[0].nome.slice(17)
    const rds = courseTitle.cursos[1].nome.slice(17);
    const createTitleCourse = document.createElement('h1')
    createTitleCourse.classList.add('title-course')
    createTitleCourse.style.fontStyle = 'bold'
    if (id == 'DS') {
        createTitleCourse.textContent = ds
        console.log(ds);
    } else if (id == 'RDS') {
        createTitleCourse.textContent = rds
        console.log(rds);
    }
    return createTitleCourse
}

const createCardAluno = (aluno) => {
    const cardAluno = document.createElement('a')
    cardAluno.href = "http://127.0.0.1:53548/frontend/pages/student.html"
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
    }
    return cardAluno
}


const loadStudents = async () => {
    const box = document.getElementById('box')
    const container = document.getElementById('container-students')
    const alunos = courseStudents.alunos.map(createCardAluno)
    container.append(...alunos)
    box.replaceChildren(createTitle(), container)
}

loadStudents()
