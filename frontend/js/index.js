'use strict'
  
    import { preencherCard } from "./api.js"

    const cursos = await preencherCard();
    console.log(cursos)

    
    const criarCardCurso = (curso) => {
        const card = document.createElement ( 'div' )
        card.classList.add( 'card' )

        const img = document.createElement ( 'img' )
        img.classList.add( 'card__image' )
        img.src = `./${curso.icone}`

        const name = document.createElement ( 'h1' )
        name.classList.add( 'card__name' )
        name.textContent = curso.sigla

        card.append(img, name)

        return card
    }

    const carregarCards = () => {

        const container = document.getElementById( 'container' )
        const cards = ( criarCardCurso )

        container.replaceChildren(...cards)
    }

carregarCards()
    
