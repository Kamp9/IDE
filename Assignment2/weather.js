// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 30},
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

var valueline4 = d3.line()
    .x(function(d) { return x(d.YEAR); })
    .y(function(d) { return y(d.MEAN); });

var valueline5 = d3.line()
    .x(function(d) { return x(d.YEAR); })
    .y(function(d) { return y(d.FIVEMEAN); })
    .curve(d3.curveBasis);


var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

var mean_arr = [];





// Get the data
d3.csv("station.csv", function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.YEAR = parseTime(d.YEAR);
      d.JAN = +d.JAN;
      d.FEB = +d.FEB;
      d.MAR = +d.MAR;
      d.APR = +d.APR;
      d.MAY = +d.MAY;
      d.JUN = +d.JUN;
      d.JUL = +d.JUL;
      d.AUG = +d.AUG;
      d.SEP = +d.SEP;
      d.OCT = +d.OCT;
      d.NOV = +d.NOV;
      d.DEC = +d.DEC;
      d.MEAN = ((d.JAN+d.FEB+d.MAR+d.APR+d.MAY+d.JUN+d.JUL+d.AUG+d.SEP+d.OCT+d.NOV+d.DEC)/12);
  });

  for(i = 0; i < data.length;i++){
    if(i==0)
    {
      data[i].FIVEMEAN = (data[i].MEAN +data[i+1].MEAN+data[i+2].MEAN)/3;
    }
    else if(i==1)
    {
      data[i].FIVEMEAN = (data[i-1].MEAN +data[i].MEAN +data[i+1].MEAN+data[i+2].MEAN)/4;      
    }
    else if(i==data.length-2)
    {
      data[i].FIVEMEAN = (data[i-2].MEAN +data[i-1].MEAN +data[i].MEAN+data[i+1].MEAN)/4;      

    }
    else if(i == data.length-1)
    {
      data[i].FIVEMEAN = (data[i-2].MEAN +data[i-1].MEAN+data[i].MEAN)/3;      
    }
    else{
    data[i].FIVEMEAN = ((data[i-2].MEAN +data[i-1].MEAN+data[i].MEAN +data[i+1].MEAN+data[i+2].MEAN)/5 ); 
    }
  }

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.YEAR; }));
  y.domain([d3.min(data, function(d) {
    return Math.min(d.MEAN); }),
     d3.max(data, function(d) {
    return Math.max(d.MEAN); })]);


    var color = d3.scaleOrdinal(d3.schemeCategory10);  // set the colour scale


  // Add the valueline path.
//  svg.append("path")
//      .data([data])
//      .attr("class", "line")
//      .style("stroke","blue")
//      .style("fill","none")
//      .style("stroke-width","2")
//      .attr("d", valueline);
//
//  // Add the valueline2 path.
//  svg.append("path")
//      .data([data])
//      .attr("class", "line")
//      .style("stroke", "red")
//      .style("stroke-width","2")
//      .style("fill","none")
//      .attr("d", valueline2);
//
//  // Add the valueline3 path.
//  svg.append("path")
//      .data([data])
//      .attr("class", "line")
//      .style("stroke", "green")
//      .style("stroke-width","2")
//      .style("fill","none")
//      .attr("d", valueline3);

  // Add the valueline3 path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .style("stroke", "grey")
      .style("stroke-width","2")
      .style("fill","none")
      .attr("d", valueline4);

  svg.append("path")
      .data([data])
      .attr("class", "line")
      .style("stroke", "red")
      .style("stroke-width","3")
      .style("fill","none")
      .attr("d", valueline5);

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

var focus = svg.append("g")
      .attr("class", "focus")
      .style("display", "none");

  focus.append("circle")
      .attr("r", 4.5);

  focus.append("text")
      .attr("x", 9)
      .attr("dy", ".35em");

  svg.append("rect")
      .attr("class", "overlay")
      .attr("width", width)
      .attr("height", height)
      .style("fill-opacity","0.0")
      .on("mouseover", function() { focus.style("display", null); })
      .on("mouseout", function() { focus.style("display", "none"); })
      .on("mousemove", mousemove);

  function mousemove() {
    var x0 = x.invert(d3.mouse(this)[0]),
        i = x0.getFullYear()-1880,//(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.YEAR > d1.YEAR - x0 ? d1 : d0;
    console.log(x0.getFullYear()-1880);
    focus.attr("transform", "translate(" + x(d.YEAR) + "," + y(d.MEAN) + ")");
    focus.select("text").text(d.MEAN);
  }  //function mousemove() {
  //  var x0 = x.invert(d3.mouse(this)[0]),
  //      i = bisectDate(data, x0, 1),
  //      d0 = data[i - 1],
  //      d1 = data[i],
  //      d = x0 - d0.date > d1.date - x0 ? d1 : d0;
  //  focus.attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")");
  //  focus.select("text").text(formatCurrency(d.close));
  //}

});
