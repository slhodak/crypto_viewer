import React from 'react';
import { createChart } from '../timeseries';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'line',
      types: ['line', 'bar'],
      currency: 'USD',
      currencyData: []
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.queryCrypto = this.queryCrypto.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  componentDidMount() {
    this.queryCrypto();
  }

  queryCrypto() {
    const { currency } = this.state;
    fetch(`http://localhost:3000/prices?curr=${currency}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          currencyData: data
        }, () => {
          this.chart = createChart(data, 'line', currency);
        });
      })
      .catch(err => console.log(err));
  }

  selectOption(event) {
    if (event.target.name === 'currency') {
      this.setState({
        currency: event.target.value
      }, () => {
        this.queryCrypto();
      });
    } else if (event.target.name === 'type') {
      this.chart.config.type = event.target.value;
      this.chart.update();
    }
  }

  render() {
    const { types } = this.state;
    return (
      <div>
        <h1>Crypto Viewer</h1>
        <select name="type" onChange={this.selectOption}>
          {types.map(type => <option value={type}>{type}</option>)}
        </select>
        <select name="currency" onChange={this.selectOption}>
          <option value="USD">USD</option>
          <option value="CNY">CNY</option>
        </select>
        <canvas id="cryptoPrices">
          <p>Fallback content</p>
        </canvas>
        <p>Powered by Coindesk</p>
      </div>
    );
  }
}
