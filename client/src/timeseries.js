const createChart = (priceData) => {
  const prices = [];
  for (let time in priceData.bpi) {
    prices.push([time, priceData.bpi[time]]);
  }
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: prices.map(data => data[0]),
      datasets: [{
        label: 'Bitcoin',
        data: prices.map(data => data[1]),
        backgroundColor: [
          'rgba(0, 0, 0, 0)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)'
        ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        }
      }
  });
}

export { createChart }
