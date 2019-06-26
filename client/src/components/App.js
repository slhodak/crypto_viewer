import React from 'react';
import { createChart } from '../timeseries';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    createChart();
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