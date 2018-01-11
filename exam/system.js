var w = 1200, h = 1200;
var t0 = Date.now();

var slowdown = 1;

d3.csv("habit_planets.csv",function(error, data) {
  if (error) throw error;


  data.forEach(function(d){
    d['P. Mass (EU)'] = + d['P. Mass (EU)']
    d['P. Gravity (EU)'] = + d['P. Gravity (EU)']
    d['P. Disc. Year'] = + d['P. Disc. Year']
    d['P. Habitable'] = + d['P. Habitable']
    d['P. Radius (EU)'] = + d['P. Radius (EU)']
    d['P. Ts Mean (K)'] = + d['P. Ts Mean (K)']
    d['P. Mean Distance (AU)'] = + d['P. Mean Distance (AU)']
    d['P. Period (days)'] = + d['P. Period (days)']
    d.phi0 = 190
  });
  console.log(data);


var svg = d3.select("#planetarium").insert("svg")
  .attr("width", w).attr("height", h)
  .on("mouseover",function(d){
    slowdown = 0;
  })
  .on("mouseout",function(d){
    slowdown = 1;
  });

var sun_size = 70;
svg.append("svg:image")
    .attr("xlink:href", "sun.png")
    .attr("x", w/2-sun_size/2).attr("y", h/2-sun_size/2).attr("height", sun_size).attr("width", sun_size).attr("class", "sun");



var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-40, 0])
  .html(function(d) {
    return "<strong>Name:</strong> <span style='color:red'>" + d['P. Name'] + "</span><br>"+
           "<strong>Mass:</strong> <span style='color:red'>" + d['P. Mass (EU)'] + "</span><br>"+
           "<strong>Radius:</strong> <span style='color:red'>" + d['P. Radius (EU)'] + "</span><br>";
  })

svg.call(tip);

var container = svg.append("g")
.attr("transform", "translate(" + w/2 + "," + h/2 + ")")

container.selectAll("g.planet").data(data).enter().append("g")
    .on('mouseenter', tip.show)
    .on('mouseout', tip.hide)
    .attr("class", "planet").each(function(d, i) {
    //d3.select(this).append("circle").attr("class", "orbit")
    //  .attr("r", d['P. Mean Distance (AU)']*1000);
    d3.select(this).append("circle").attr("r", d['P. Radius (EU)']*5).attr("cx",d['P. Mean Distance (AU)']*1000)
      .attr("cy", 0).attr("class", "planet");
  });

var speed = 0;
d3.timer(function() {
  // if(slowdown==1){
  var delta = (Date.now() - t0);
  svg.selectAll(".planet").attr("transform", function(d) {
    if(slowdown==1){
        speed += 0.12;
    }else{
        speed += 0.01;
        
    }
    return "rotate(" + d.phi0 + speed * (1/d['P. Period (days)'])/2 + ")";
  });
    // }
});

});
