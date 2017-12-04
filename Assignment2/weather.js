// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 20},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%Y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the 1st line
var valueline = d3.line()
    .x(function(d) { return x(d.YEAR); })
    .y(function(d) { return y(d.JAN); });

// define the 2nd line
var valueline2 = d3.line()
    .x(function(d) { return x(d.YEAR); })
    .y(function(d) { return y(d.FEB); });

// define the 3rd line
var valueline3 = d3.line()
    .x(function(d) { return x(d.YEAR); })
    .y(function(d) { return y(d.MAR); });


var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");


// Get the data
d3.csv("station.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.YEAR = parseTime(d.YEAR);
      d.JAN = +d.JAN;
      d.FEB = +d.FEB;
      d.MAR = +d.MAR;
  });


  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.YEAR; }));
  y.domain([d3.min(data, function(d) {
    return Math.min(d.JAN, d.FEB, d.MAR); }),
     d3.max(data, function(d) {
    return Math.max(d.JAN, d.FEB, d.MAR); })]);

  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .style("stroke","blue")
      .style("fill","none")
      .attr("d", valueline);

  // Add the valueline2 path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .style("stroke", "red")
      .style("fill","none")
      .attr("d", valueline2);

  // Add the valueline3 path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .style("stroke", "green")
      .style("fill","none")
      .attr("d", valueline3);

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

});
