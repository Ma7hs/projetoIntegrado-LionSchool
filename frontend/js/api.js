'use strict'

export const fetchData = async () => {
    const url = `https://matheusiznho.onrender.com/v1/lion-school/cursos`
    // const url = `http://localhost:8080/v1/lion-school/cursos`
    const response = await fetch(url)
    const data = await response.json()
    return {...data}
}

export const fetchStudent = async (turma, status) => {
    const url = `https://teste-lion.onrender.com/v1/lion-school/alunos/${turma}/${status}`
    // const url = `http://localhost:8080/v1/lion-school/alunos/${turma}/${status}`
    const response = await fetch(url)
    const data = await response.json()
    return {...data}
}
