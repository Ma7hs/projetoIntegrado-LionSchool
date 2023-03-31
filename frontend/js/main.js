'use strict'
import {fetchData} from "./request.js";

const allCourses = await fetchData();

const createCard = (curso) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const sigla = document.createElement('h1')
    sigla.classList.add('card__name')
    sigla.textContent = curso.sigla
 
    card.append(sigla)
    return card

}

const load = () =>{
    const container = document.getElementById('courses')
    const cursos = allCourses.cursos.map(createCard)
    container.replaceChildren(...cursos)

}

load()
//console.log(allCourses.cursos.map(index => index.sigla))


