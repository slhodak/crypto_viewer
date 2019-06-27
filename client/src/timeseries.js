import moment from 'moment';
import Chart from 'chart.js';

const createChart = (priceData, type) => {
  const prices = [];
  for (let time in priceData.bpi) {
    prices.push([time, priceData.bpi[time]]);
  }
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: type,
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
          scaleLabel: {
            display: true,
            labelString: 'Price'
          }
        }],
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              day: 'MMM D, YYYY'
            }
          },
          scaleLabel: {
            display: true,
            labelString: 'Date'
          }
        }]
      },
      elements: {
        line: {
            tension: 0
        }
      }
    }
  });
  return chart;
}

export { createChart }
