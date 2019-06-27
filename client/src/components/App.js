import React from 'react';
import { createChart } from '../timeseries';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'line',
      types: ['line', 'bar']
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.queryCrypto = this.queryCrypto.bind(this);
    this.selectType = this.selectType.bind(this);
  }

  componentDidMount() {
    this.queryCrypto();
  }

  queryCrypto() {
    const { type } = this.state;
    fetch(`http://localhost:3000/prices`)
      .then(response => response.json())
      .then(data => {
        createChart(data, type)
      })
      .catch(err => console.log(err));
  }

  selectType(event) {
    this.setState({
      type: event.target.value
    });
  }


  render() {
    const { types } = this.state;
    return (
      <div>
        <h1>Crypto Viewer</h1>
        <canvas id="myChart">
          <p>Fallback content</p>
        </canvas>
        <select name="chartType" onChange={this.selectType}>
            {types.map(type => <option value={type}>{type}</option>)}
        </select>
        <button type="button" onClick={this.queryCrypto}>Update</button>
      </div>
    );
  }
}