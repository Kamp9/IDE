


// Setup properties for svg
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 400 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;



var svg2 = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom),
  g2 = svg2.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


d3.text("hands.csv",function(error, text) {
  if (error) throw error;

  var data = d3.csvParseRows(text).map(function(row) {
    return row.map(function(value) {
      return +value;
    });
  });


  var line = d3.line()
      .x(function(d) { return d.x*200; })
      .y(function(d) { return d.y*200; });
  

  for (j=0; j< data.length;j++){
    var dataLOL = []
    for(i=0 ;i < data[0].length/2;i++){
      dataLOL.push({"x" : data[j][i],"y" : data[j][i+56]});
    }
  
    /// CREATING LINE HERE /////////
    g2.append("path")
         .attr("fill", "none")
         .attr("stroke", "steelblue")
         .attr("stroke-linejoin", "round")
         .attr("stroke-linecap", "round")
         .attr("stroke-width", 1.5)
         .attr("id","l"+j)
//         .attr("visibility","hidden")
         .style("opacity",0.1)
         .attr("d", line(dataLOL));
     }
});


var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom),
  g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var color = d3.scaleOrdinal(d3.schemeCategory10);

// Load data 
d3.text("hands_pca.csv",function(error, text) {
  if (error) throw error;

  var data = d3.csvParseRows(text).map(function(row) {
    return row.map(function(value) {
      return +value;
    });
  });

  
  var dataScatter = []

  for(i=0 ;i < data.length;i++){
    dataScatter.push({"x" : data[i][0],"y" : data[i][1],"id" : i});
  }

  console.log(dataScatter);
  var xMap = function(d){return 300*d.x+width/2};
  var yMap = function(d){return 300*d.y+height/2};

  var tooltip = d3.select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("background", "steelblue")
      .text("a simple tooltip");

    // draw dots
  svg.selectAll(".dot")
      .data(dataScatter)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 4.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .attr('id', function (d) {
          return d.id;})
      .style("fill","none")
      .style("stroke","black")
      .style("fill", function(d) { return color(d);})

      .on("mouseover", function(d) {
          tooltip.text("ID:" + d.id + ", x: " + d.x + ', y: ' + d.y);
          return tooltip.style("visibility", "visible");
      })
      .on("mousemove", function() {
          return tooltip.style("top",
              (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px");
      })
      .on("mouseout", function() {
          return tooltip.style("visibility", "hidden");
      })

      .on("click",function(d){
        console.log(d.id);
        var tmp = d.id;
        d3.selectAll(".dot").style("fill",function(d) { return color(d);});
        d3.select(this).style("fill","red");
        console.log(d3.selectAll(".path"));
        //d3.selectAll("path").attr("visibility","hidden"); // Hide all other hands
        d3.selectAll("path").style("opacity",0.1); // Hide all other hands
        d3.selectAll("path").attr("stroke","steelblue"); // Hide all other hands
        //d3.select("#l"+tmp).attr("visibility","visible"); // Show chose hand.
        d3.select("#l"+tmp).style("opacity",1); // Show chose hand.
        d3.select("#l"+tmp).attr("stroke", "red");
        })
});

//var holder = d3.select("body")
//      .append("svg")
//      .attr("transform", "translate(" + -600 + "," + 400 + ")")
//      .attr("width", width)    
//      .attr("height", height); 
//
//holder.append("text")
//  .style("fill", "black")
//  .style("font-size", "13")
//  .attr("dy", "1em")
//  .attr("text-anchor", "middle")
//  .text("Man kan også skrive tekst her med d3");