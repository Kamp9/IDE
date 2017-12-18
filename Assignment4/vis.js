
// Setup properties for svg
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom),
  g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


//var handx = function(d) {return d.slice(0,56)};
//var xScale = d3.scaleLinear().range([0, width]); 
//var xMap = function(d) { return xScale(handx(d));}; 
//var xxMap = function(d) {return xScale(xMap(d))};
////xAxis = d3.svg.axis().scale(xScale).orient("bottom");
//
//
//var handy = function(d) {return d.slice(56,d.length)};
//var yScale = d3.scaleLinear().range([0, width]); // value -> display
//var yMap = function(d) { return yScale(handy(d));}; // data -> display
//var yyMap = function(d) {return yScale(yMap(d))};


var color = d3.scaleOrdinal(d3.schemeCategory10);

// Load data 
//d3.text("hands_pca.csv",function(error, text) {
//  if (error) throw error;
//
//  var data = d3.csvParseRows(text).map(function(row) {
//    return row.map(function(value) {
//      return +value;
//    });
//  });

  
  //var handx  = []; // x coordinates
  //var handy  = []; // y coordinates
  //data.forEach(function(d){
  //  handx.push(d.slice(0,56));
  //  handy.push(d.slice(56,d.length));
  //});

  // draw dots
 // svg.selectAll(".dot")
 //     .data(data)
 //   .enter().append("circle")
 //     .attr("class", "dot")
 //     .attr("r", 3.5)
 //     .attr("cx", xxMap)
 //     .attr("cy", yyMap)
 //     .style("fill", function(d) { return color(d);}) 
//      .on("mouseover", function(d) {
//          tooltip.transition()
//               .duration(200)
//               .style("opacity", .9);
//          tooltip.html(d["Cereal Name"] + "<br/> (" + xValue(d) 
//          + ", " + yValue(d) + ")")
//               .style("left", (d3.event.pageX + 5) + "px")
//               .style("top", (d3.event.pageY - 28) + "px");
//      })
//      .on("mouseout", function(d) {
//          tooltip.transition()
//               .duration(500)
//               .style("opacity", 0);
//      });



//});


var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom),
  g2 = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.text("hands.csv",function(error, text) {
  if (error) throw error;

  var data = d3.csvParseRows(text).map(function(row) {
    return row.map(function(value) {
      return +value;
    });
  });


  var line = d3.line()
      .x(function(d) { return d.x*100; })
      .y(function(d) { return d.y*100; });
  

  var dataLOL = []
  for(i=0 ;i < data[0].length/2;i++){
    dataLOL.push({"x" : data[0][i],"y" : data[0][i+56]});
  }

 g2.append("path")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line(dataLOL));
});