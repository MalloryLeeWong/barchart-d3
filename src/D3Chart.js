import * as d3 from 'd3'

// const data = [
//   {height: "272", name: "Robert Wadlow"},
//   {height: "267", name: "John Rogan"},
//   {height: "263.5", name: "John Carroll"},
//   {height: "257", name: "Leonid Stadnyk"},
//   {height: "251.4", name: "Vaino Myllyrinne"},
// ]

const url = "https://udemy-react-d3.firebaseio.com/tallest_men.json"
// margin is for using d3 margin convention
const MARGIN = {TOP: 10, BOTTOM: 50, LEFT: 50, RIGHT: 10}
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM

export default class D3Chart {
  constructor(element) {
    const svg = d3.select(element)
      .append("svg")
        .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
        .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g") // append svg group element onto svg canvas
        // add 10 pixel margin on left and top
        .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

    d3.json(url).then(data => {
      // d3.max loops through data array and finds max height
      const max = d3.max(data, d => d.height)
      const min = d3.min(data, d => d.height)
      const y = d3.scaleLinear()
      // domain takes an array with 2 elems, min and max input units
        .domain([min * 0.95, max])
      // range takes arr of 2 elems, min and max outputs in pixels
        .range([HEIGHT,0]) // put height as min to get y axis to start at bottom left
      // console.log(y(272)) pass in 272 cm, returns 500 pixels

      const x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0, WIDTH])
        .padding(0.4)

      // generate x axis, pass in x scale
      const xAxisCall = d3.axisBottom(x)
      // to call axis generator, need to use call method on svg var
      // append empty group for axis gen to be called on to get both axes to show
      svg.append("g")
        // use transform attr and translate attr to put x axis on bottom instead of top
        .attr("transform", `translate(0, ${HEIGHT})`)
        .call(xAxisCall)

      // generate y axis
      const yAxisCall = d3.axisLeft(y)
      svg.append("g").call(yAxisCall)

      // when want to add more than one data elem to screen at once do selectAll
      const rects = svg.selectAll("rect")
        .data(data)

      // enter and append add ever item in data to our screen
      rects.enter().append("rect")
        .attr("x", d => x(d.name))
        // move bars to start at x axis (instead of top left), have y val that's different for each el in array, return screen height - conversion of each el's height to pixels
        .attr("y", d => y(d.height))
        .attr("width", x.bandwidth)
        .attr("height", d => HEIGHT - y(d.height)) // make sure height 270 cm / pixels here fits in height svg 500
    })

  }
}
