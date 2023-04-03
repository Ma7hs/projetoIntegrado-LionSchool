'use strict'
  
    // import { preencherCard } from "./api.js"
        import {fetchData} from "./api.js"
        const allCourses = await fetchData();
    // let cursos = await preencherCard();
    // // console.log(cursos)

    const createCard = (curso) => {
        const card = document.createElement('div')
        card.classList.add('card')

        const sigla = document.createElement('h1')
        sigla.classList.add('card__name')
        sigla.textContent = curso.sigla

        card.append(sigla)
        return card
    }
    // const criarCardCurso = (curso) => {
    //     const card = document.createElement ( 'div' )
    //     card.classList.add( 'card' )

    //     const img = document.createElement ( 'img' )
    //     img.classList.add( 'card__image' )
    //     img.src = `./${curso.icone}`

    //     const name = document.createElement ( 'h1' )
    //     name.classList.add( 'card__name' )
    //     name.textContent = curso.sigla

    //     card.append(img, name)

    //     return card
    // }

//     const carregarCards = async () => {

//         // let url = "http://localhost:8080/v1/lion-school/cursos"
//         // let response = await fetch(url);
//         // let data = await response.json();
//         // let cursos = data.cursos;


//         const container = document.getElementById( 'container' )
//         const cards = ( criarCardCurso )

//         container.replaceChildren(...cards)
//     }

// carregarCards()

    const load = () => {
        const container = document.getElementById('container-courses')
        const cursos = allCourses.cursos.map(createCard)
        container.replaceChildren(...cursos)

    }

    load()
    
