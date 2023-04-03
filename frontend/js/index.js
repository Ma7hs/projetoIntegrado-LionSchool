'use strict'

import {fetchData} from "./api.js"
const allCourses = await fetchData();
var i = 0;

const createCard = (curso) => {
    const button = document.createElement('button')
    button.classList.add('card')

    const sigla = document.createElement('h1')
    sigla.classList.add('card__name')
    sigla.textContent = curso.sigla

    button.append(sigla)
    
    return card
}

const load = () => {
    const container = document.getElementById('container-courses')
    const cursos = allCourses.cursos.map(createCard)
    container.replaceChildren(...cursos)

}

load()