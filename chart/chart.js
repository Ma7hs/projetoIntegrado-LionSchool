const ctx = document.getElementById('myChart');
const btn = document.getElementById('button')

async function updateChart() {
  const fetchData = async () => {
    const url = `http://localhost:8080/v1/lion-school/status/disciplinas/${20151001017}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const data = await fetchData();
  
  const disciplineName = data.disciplinas.map((index) => {
    return index.nome
  })

  const disciplineAverage = data.disciplinas.map((index) => {
    return index.media
  })

  let arrayColors = []
  disciplineAverage.forEach(index => {
    console.log(index)
  });

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: disciplineName,
      datasets: [{
        label: `Media de Notas`,
        data: disciplineAverage,
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
  })

  myChart.data.labels = disciplineName;
  myChart.data.datasets[0].data = disciplineAverage;
  myChart.update();
}

updateChart();