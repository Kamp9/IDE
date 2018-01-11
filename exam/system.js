var w = 1200, h = 1200;
var t0 = Date.now();

var slowdown = 1;

d3.csv("habit_planets.csv",function(error, data) {
  if (error) throw error;
  var t_min = 0;
  var t_max = 0;
  data.forEach(function(d){
    d['P. Mass (EU)'] = + d['P. Mass (EU)']
    d['P. Gravity (EU)'] = + d['P. Gravity (EU)']
    d['P. Disc. Year'] = + d['P. Disc. Year']
    d['P. Habitable'] = + d['P. Habitable']
    d['P. Radius (EU)'] = + d['P. Radius (EU)']
    d['P. Ts Mean (K)'] = + d['P. Ts Mean (K)']
    d['P. Mean Distance (AU)'] = + d['P. Mean Distance (AU)']
    d['P. Period (days)'] = + d['P. Period (days)']
    d['S. Mass (SU)'] = + d['S. Mass (SU)']
    d.phi0 = 190
    if (d['P. Ts Mean (K)'] > t_max) {
        t_max = d['P. Ts Mean (K)'];
    }
    if (d['P. Ts Mean (K)'] < t_min) {
        t_min = d['P. Ts Mean (K)'];
    }
  });
  console.log(data);


function calculateColor(t, min_t, max_t) {
    var temp_range = 255.0 / max_t - min_t;
    var temp_mean = max_t + min_t / 2.0;
    var r = 255 - Math.abs(max_t - t) * temp_range;
    var g = 255 - Math.abs(temp_mean - t) * temp_range * 2;
    var b = 255 - Math.abs(min_t - t) * temp_range;
    console.log(Math.floor(r), Math.floor(g), Math.floor(b));
    return [Math.floor(r), Math.floor(g), Math.floor(b)];
}


var svg = d3.select("#planetarium").insert("svg")
  .attr("width", w).attr("height", h)
  .on("mouseover",function(d){
    slowdown = 0;
  })
  .on("mouseout",function(d){
    slowdown = 1;
  });


// sun settings
var sun_size = 70;
svg.append("svg:image")
    .attr("xlink:href", "sun.png")
    .attr("x", w/2-sun_size/2).attr("y", h/2-sun_size/2).attr("height", sun_size).attr("width", sun_size).attr("class", "sun");


// tooltips
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
.attr("transform", "translate(" + w/2 + "," + h/2 + ")");

container.selectAll("g.planet").data(data).enter().append("g")
    .on('mouseenter', tip.show)
    .on('mouseout', tip.hide)
    .attr("class", "planet").each(function(d, i) {
    //d3.select(this).append("circle").attr("class", "orbit")
    //  .attr("r", d['P. Mean Distance (AU)']*1000);
    d3.select(this).append("circle").attr("r", d['P. Radius (EU)']*5).attr("cx",d['P. Mean Distance (AU)']*1000)
      .attr("cy", 0).attr("class", "planet").style("fill", d3.rgb(calculateColor(d['P. Ts Mean (K)'], t_min, t_max)))
  });



var speed = 0;
d3.timer(function() {
  var delta = (Date.now() - t0);
  svg.selectAll(".planet").attr("transform", function(d) {
    if(slowdown==1){
        speed += 0.12;
    }else{
        speed += 0.01;
        
    }
    return "rotate(" + d.phi0 + speed * (1/d['P. Period (days)'])/2 + ")";
  });
});

});
