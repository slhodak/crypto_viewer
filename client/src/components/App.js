import React from 'react';
import { createChart } from '../timeseries';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
    this.queryCrypto = this.queryCrypto.bind(this);
  }

  componentDidMount() {
    this.queryCrypto();
  }

  queryCrypto() {
    fetch(`http://localhost:3000/prices`)
      .then(response => response.json())
      .then(data => {
        createChart(data);
      })
      .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div>
        <h1>Crypto Viewer</h1>
        <canvas id="myChart">
          <p>Fallback content</p>
        </canvas>
      </div>
    );
  }
}