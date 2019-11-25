import React, {Component} from 'react'
import D3Chart from './D3Chart'

// when change value of gender dropdown, changes App.js state
// we disable usual behavior to re-render in shouldComponentUpdate
// but the chart update will still be fired
// we want chart updates with d3 instead of total react component re-render every time state changes

class ChartWrapper extends Component {
  // important to put in component did mount because we're changing something that already loaded to screen
  componentDidMount() {
    this.setState({
      chart: new D3Chart(this.refs.chart)
    })
  }

  shouldComponentUpdate(){
    // should not react re-render when something changes, we'll manually update
    return false
  }

  componentWillReceiveProps(nextProps){
    // run as soon as new props become available before any updates
    this.state.chart.update(nextProps.gender)
  }

  render () {
    return (
      <div ref="chart"></div>
    )
  }
}

export default ChartWrapper
