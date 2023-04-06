'use strict'

<<<<<<< HEAD
import {fetchData} from "./api.js"
const allCourses = await fetchData();
var i = 0;

const createCard = (curso) => {
    const button = document.createElement('button')
    button.classList.add('card')

=======
import { fetchData, fetchStudent } from "./api.js"

const allCourses = await fetchData();

var i = 0;


export const createCard = (curso) => {
    const card = document.createElement('a')
    card.href = "./pages/course.html"
    card.target = 'blank_'
    card.classList.add('card')

>>>>>>> 6f471a089658efa9ea79502dca89576e184412ab
    const sigla = document.createElement('h1')
    sigla.classList.add('card__name')
    sigla.textContent = curso.sigla

<<<<<<< HEAD
    button.append(sigla)
    
    return card
=======
    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = curso.icone

    card.append(img, sigla)
    card.id = curso.sigla;

    card.onclick = () => {
        fetchStudent(card.id)
        var storage = localStorage.setItem('id_card', card.id)
    }

    return card

>>>>>>> 6f471a089658efa9ea79502dca89576e184412ab
}

const load = () => {
    const container = document.getElementById('container-courses')
    const cursos = allCourses.cursos.map(createCard)
    container.replaceChildren(...cursos)
<<<<<<< HEAD

}

load()
=======
}

load()
>>>>>>> 6f471a089658efa9ea79502dca89576e184412ab
