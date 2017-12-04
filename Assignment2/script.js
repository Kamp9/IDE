

d3.text("station.csv", function(datasetText) {
console.log(datasetText)
var parsedCSV = d3.csvParseRows(datasetText);
console.log(parsedCSV[1][0])
var sampleHTML = d3.select("body")
    .append("table")
    .style("border-collapse", "collapse")
    .style("border", "2px black solid")

    .selectAll("tr")
    .data(parsedCSV)
    .enter().append("tr")

    .selectAll("td")
    .data(function(d){return d;})
    .enter().append("td")
    .style("border", "1px black solid")
    .style("padding", "5px")
    .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")})
    .on("mouseout", function(){d3.select(this).style("background-color", "white")})
    .text(function(d){return d;})
    .style("font-size", "12px");
});