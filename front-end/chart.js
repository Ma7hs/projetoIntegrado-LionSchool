const ctx = document.getElementById('myChart');
const btn = document.getElementById('button')

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: `Media de Notas`,
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: [
            'rgba(51, 71, 176, 1)',
            'rgba(193, 16, 16, 1)',
            'rgba(229, 182, 87, 1)',
            'rgba(51, 71, 176, 1)',
            'rgba(51, 71, 176, 1)',
            'rgba(51, 71, 176, 1)',
        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
)

console.log(myChart)

function uptadeChart() {    
    const fetchData = async () => {
        const url = `http://localhost:8080/v1/lion-school/status/disciplinas/${20151001012}`
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    const name = fetchData().then(data => {
        const disciplineName = data.disciplinas.map((index) => {
            return index.nome
        })
        console.log(disciplineName)
        myChart.data.labels = disciplineName;
        myChart.update()

    })

    const average = fetchData().then(data => {
        const disciplineAverage = data.disciplinas.map((index) => {
            return index.media
        })  
        console.log(disciplineAverage)
        myChart.data.datasets[0].data = disciplineAverage
        myChart.update()
    })
}


btn.onclick = () => {
    uptadeChart()
}