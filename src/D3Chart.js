import * as d3 from 'd3'

// const data = [
//   {height: "272", name: "Robert Wadlow"},
//   {height: "267", name: "John Rogan"},
//   {height: "263.5", name: "John Carroll"},
//   {height: "257", name: "Leonid Stadnyk"},
//   {height: "251.4", name: "Vaino Myllyrinne"},
// ]

const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json"

export default class D3Chart {
  constructor(element) {
    const svg = d3.select(element)
      .append("svg")
      .attr("width", 800)
      .attr("height", 500)

    d3.json(url).then(data => {
      // when want to add more than one data elem to screen at once do selectAll
      const rects = svg.selectAll("rect")
        .data(data)

      // enter and append add ever item in data to our screen
      rects.enter().append("rect")
        .attr("x", (d, i) => i *100)
        .attr("y", 0)
        .attr("width", 50)
        .attr("height", d => d.height) // make sure height 270 cm / pixels here fits in height svg 500
    })

  }
}
