'use strict'

export const fetchData = async () => {
    // const url = `https://lion-school.onrender.com/v1/lion-school/cursos`
    const url = `http://localhost:8080/v1/lion-school/cursos`
    const response = await fetch(url)
    const data = await response.json()
    return {...data}
}

export const fetchStudent = async (turma, status) => {
    // const url = `https://lion-school.onrender.com/v1/lion-school/${turma}/alunos/${status}`
    const url = `http://localhost:8080/v1/lion-school/${turma}/alunos/${status}`
    const response = await fetch(url)
    const data = await response.json()
    return {...data}
}
