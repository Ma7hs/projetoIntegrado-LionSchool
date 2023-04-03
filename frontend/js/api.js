'use strict'

//leticia
// export const preencherCard = async () => {
//     const url = "http://localhost:8080/v1/lion-school/cursos"
//     const response = await fetch(url);
//     const data = await response.json();

//     return {
//         ...data.cursos
//     }

// }

export const fetchData = async () => {
    const url = `http://localhost:8080/v1/lion-school/cursos`
    const response = await fetch(url)
    const data = await response.json()
    return {...data}
}