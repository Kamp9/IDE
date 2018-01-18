///////////////////////////////////////////////////////////////////////////
//////////////////// Set up and initiate svg containers ///////////////////
///////////////////////////////////////////////////////////////////////////


var MapColumns = 30,
    MapRows = 20;

var margin = {
    top: -50,
    right: 0,
    bottom: 120,
    left: 0
};


width = 1370;
var height = 5;
//SVG container
var svg = d3.select('#color')
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Reset the overall font size
var newFontSize = width * 62.5 / 800;
d3.select("html").style("font-size", newFontSize + "%");

//Format to display numbers
var formatPercent = d3.format("%");

//Needed for gradients
var defs = svg.append("defs");

var coloursYGB = ["#FFFFDD","#AAF191","#80D385","#61B385","#3E9583","#217681","#285285","#1F2D86","#000086"];
var colourRangeYGB = d3.range(0, 1, 1.0 / (coloursYGB.length - 1));
colourRangeYGB.push(1);

//Create color gradient
var colorScaleYGB = d3.scaleLinear()
    .domain(colourRangeYGB)
    .range(coloursYGB)
    .interpolate(d3.interpolateHcl);

//Needed to map the values of the dataset to the color scale
var colorInterpolateYGB = d3.scaleLinear()
    .domain([-60.05, 59.65])
    .range([0, 1]);

///////////////////////////////////////////////////////////////////////////
///////////////////// Create the YGB color gradient ///////////////////////
///////////////////////////////////////////////////////////////////////////

//Calculate the gradient
defs.append("linearGradient")
    .attr("id", "gradient-ygb-colors")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%")
    .selectAll("stop")
    .data(coloursYGB)
    .enter().append("stop")
    .attr("offset", function(d,i) { return i/(coloursYGB.length-1); })
    .attr("stop-color", function(d) { return d; });

///////////////////////////////////////////////////////////////////////////
//////////// Get continuous color scale for the Rainbow ///////////////////
///////////////////////////////////////////////////////////////////////////

var coloursRainbow = ["#2c7bb6", "#00a6ca","#00ccbc","#90eb9d","#ffff8c","#f9d057","#f29e2e","#e76818","#d7191c"];
var colourRangeRainbow = d3.range(0, 1, 1.0 / (coloursRainbow.length - 1));
colourRangeRainbow.push(1);

//Create color gradient
var colorScaleRainbow = d3.scaleLinear()
    .domain(colourRangeRainbow)
    .range(coloursRainbow)
    .interpolate(d3.interpolateHcl);

//Needed to map the values of the dataset to the color scale

///////////////////////////////////////////////////////////////////////////
//////////////////// Create the Rainbow color gradient ////////////////////
///////////////////////////////////////////////////////////////////////////

//Calculate the gradient
defs.append("linearGradient")
    .attr("id", "gradient-rainbow-colors")
    .attr("x1", "0%").attr("y1", "0%")
    .attr("x2", "100%").attr("y2", "0%")
    .selectAll("stop")
    .data(coloursRainbow)
    .enter().append("stop")
    .attr("offset", function(d,i) { return i/(coloursRainbow.length-1); })
    .attr("stop-color", function(d) { return d; });

///////////////////////////////////////////////////////////////////////////
//////////////////////////// Draw Heatmap /////////////////////////////////
///////////////////////////////////////////////////////////////////////////

// //Append title to the top
// svg.append("text")
//     .attr("class", "title")
//     .attr("x", width/2-10)
//     .attr("y", -80)
//     .text("Clustering of Supermarkets");
// svg.append("text")
//     .attr("class", "subtitle")
//     .attr("x", width/2-10)
//     .attr("y", -58)
//     .text("based on demographics");
// svg.append("text")
//     .attr("class", "subtitle")
//     .attr("x", width/2-10)
//     .attr("y", -30)
//     .style("font-weight", 800)
//     .style("fill", "#676767")
//     .text("click anywhere to switch colors");
//
// svg.append("g")
//     .selectAll(".hexagon")
//     .data(points)
//     .enter().append("path")
//     .attr("class", "hexagon")
//     .attr("d", function (d) { return "M" + d.x + "," + d.y + hexagonPath; })
//     .style("stroke", "#fff")
//     .style("stroke-width", "1px")
//     .style("fill", "white")
//     .on("mouseover", mover)
//     .on("mouseout", mout);

///////////////////////////////////////////////////////////////////////////
////////////////////////// Draw the legend ////////////////////////////////
///////////////////////////////////////////////////////////////////////////

var legendWidth = width * 0.6,
    legendHeight = 10;

//Color Legend container
var legendsvg = svg.append("g")
    .attr("class", "legendWrapper")
    .attr("transform", "translate(" + (width/2 - 10) + "," + (height+50) + ")");

//Draw the Rectangle
legendsvg.append("rect")
    .attr("class", "legendRect")
    .attr("x", -legendWidth/2)
    .attr("y", 10)
    //.attr("rx", legendHeight/2)
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "none");


//Set scale for x-axis
var xScale = d3.scaleLinear()
    .range([0, legendWidth])
    .domain([-60.05,59.65+1]);

var xAxis = d3.axisBottom()
    .ticks(10)  //Set rough # of ticks
    //.tickFormat(formatPercent)
    .scale(xScale)

console.log(d3.selectAll("g.tick"));

//Set up X axis
legendsvg.append("g")
    .attr("class", "axis")  //Assign "axis" class
    .attr("transform", "translate(" + (-legendWidth/2) + "," + (10 + legendHeight) + ")")
    .call(xAxis);


//Transition the colors to a rainbow
function updateRainbow() {
    //Fill the legend rectangle
    svg.select(".legendRect")
        .style("fill", "url(#gradient-rainbow-colors)");
}

//Start set-up
updateRainbow();
var currentFill = "rainbow";
