const ctx = document.getElementById('myChart');
const btn = document.getElementById('button')

async function updateChart() {
  const fetchData = async () => {
    const url = `http://localhost:8080/v1/lion-school/status/disciplinas/${20151001004}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  const data = await fetchData()
  const disciplineName = data.disciplinas.map((index) => {
    return index.nome
  })
  const disciplineAverage = data.disciplinas.map((index) => {
    return index.media
  })

  let arrayColors = []
  disciplineAverage.forEach(mediaMateria => {
    if(mediaMateria >= 0 && mediaMateria < 50){
      arrayColors.push('rgba(193, 16, 16, 1)');
    }else if(mediaMateria >= 50 && mediaMateria < 80){
      arrayColors.push('rgba(229, 182, 87, 1)');
    }else if(mediaMateria >= 80 && mediaMateria <= 100){
      arrayColors.push('rgba(51, 71, 176, 1)');
    }
  });

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: disciplineName,
      datasets: [{
        label: `Media de Notas`,
        data: disciplineAverage,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: arrayColors
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        },
      }
    }
  })

  myChart.data.labels = disciplineName;
  myChart.data.datasets[0].data = disciplineAverage;
  myChart.update();
}

updateChart();