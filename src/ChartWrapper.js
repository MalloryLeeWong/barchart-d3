import React, {Component} from 'react'
import D3Chart from './D3Chart'

export default class ChartWrapper extends Component {
  // important to put in component did mount because we're changing something that already loaded to screen
  componentDidMount() {
    new D3Chart(this.refs.chart)
  }

  render () {
    return (
      <div ref="chart"></div>
    )
  }
}
