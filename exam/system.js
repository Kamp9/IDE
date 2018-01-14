// include the menu.js file
var script  = document.createElement('script');
script.src  = "menu.js";
script.type = 'text/javascript';
script.defer = true;
document.getElementsByTagName('head').item(0).appendChild(script);

var w = 1200, h = 1200;
var t0 = Date.now();

var slowdown = 1;
var sun_global_img = null;

var use_dataset = 1;

d3.csv("planets.csv",function(error, data2) {
    if (error) throw error;
    var t_min2 = Infinity;
    var t_max2 = 0;
    data2.forEach(function(d){
        d['P. Mass (EU)'] = + d['P. Mass (EU)']
        d['P. Gravity (EU)'] = + d['P. Gravity (EU)']
        d['P. Disc. Year'] = + d['P. Disc. Year']
        d['P. Habitable'] = + d['P. Habitable']
        d['P. Radius (EU)'] = + d['P. Radius (EU)']
        d['P. Ts Mean (K)'] = + d['P. Ts Mean (K)']
        d['P. Mean Distance (AU)'] = + d['P. Mean Distance (AU)']
        d['P. Period (days)'] = + d['P. Period (days)']
        d['S. Mass (SU)'] = + d['S. Mass (SU)']
        d['S. Radius (SU)'] = + d['S. Radius (SU)']
        d.phi0 = 190
        if (d['P. Ts Mean (K)'] > t_max2) {
            t_max2 = d['P. Ts Mean (K)'];
        }
        if (d['P. Ts Mean (K)'] < t_min2) {
            t_min2 = d['P. Ts Mean (K)'];
        }
    });

    d3.csv("planets2.csv",function(error, data3) {
        if (error) throw error;
        var t_min3 = Infinity;
        var t_max3 = 0;
        data3.forEach(function(d){
            d['P. Mass (EU)'] = + d['P. Mass (EU)']
            d['P. Gravity (EU)'] = + d['P. Gravity (EU)']
            d['P. Disc. Year'] = + d['P. Disc. Year']
            d['P. Habitable'] = + d['P. Habitable']
            d['P. Radius (EU)'] = + d['P. Radius (EU)']
            d['P. Ts Mean (K)'] = + d['P. Ts Mean (K)']
            d['P. Mean Distance (AU)'] = + d['P. Mean Distance (AU)']
            d['P. Period (days)'] = + d['P. Period (days)']
            d['S. Mass (SU)'] = + d['S. Mass (SU)']
            d['S. Radius (SU)'] = + d['S. Radius (SU)']
            d.phi0 = 190
            if (d['P. Ts Mean (K)'] > t_max3) {
                t_max3 = d['P. Ts Mean (K)'];
            }
            if (d['P. Ts Mean (K)'] < t_min3) {
                t_min3 = d['P. Ts Mean (K)'];
            }
        });


d3.csv("habit_planets.csv",function(error, data) {
  if (error) throw error;
  var t_min = Infinity;
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
    d['S. Radius (SU)'] = + d['S. Radius (SU)']
    d.phi0 = 190
    if (d['P. Ts Mean (K)'] > t_max) {
        t_max = d['P. Ts Mean (K)'];
    }
    if (d['P. Ts Mean (K)'] < t_min) {
        t_min = d['P. Ts Mean (K)'];
    }
  });


function calculateColor(t, min_t, max_t) {
    var temp_range = 255.0 / (max_t - min_t);
    var temp_mean = (max_t + min_t) / 2.0;
    var r = 255 - Math.abs(max_t - t) * temp_range;
    var g = 255 - Math.abs(temp_mean - t) * temp_range * 2;
    var b = 255 - Math.abs(min_t - t) * temp_range;
    return d3.rgb(Math.floor(r), Math.floor(g), Math.floor(b));
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
    .attr("id", "sun")
    .attr("x", w/2-sun_size/2).attr("y", h/2-sun_size/2).attr("height", sun_size).attr("width", sun_size).attr("class", "sun");


sun_global_img = svg.select("#sun");

// sun_global_img.attr("x",0);

// tooltips
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-40, 0])
  .html(function(d) {
    return "<strong>Name:</strong> <span style='color:red'>" + d['P. Name'] + "</span><br>"+
           "<strong>Mass:</strong> <span style='color:red'>" + d['P. Mass (EU)'] +" EU" +"</span><br>"+
           "<strong>Radius:</strong> <span style='color:red'>" + d['P. Radius (EU)'] + "</span><br>"+
           "<strong>Perioid (days):</strong> <span style='color:red'>" + d['P. Period (days)'] + "</span><br>"+
           "<strong>Mean distance to sun (AU):</strong> <span style='color:red'>" + d['P. Mean Distance (AU)'] + "</span><br>"+
           "<strong>Mean Temp:</strong> <span style='color:red'>" + (d['P. Ts Mean (K)'] - 273.15).toFixed(2)+('\xB0')+ "C" + "</span><br>";
  })

var tip2 = d3.tip()
  .attr('class', 'd3-tip2')
  .html(function(d){
    return "<strong>Name:</strong> <span style='color:red'>"+d['S. Name']+"</span><br>"+
    "<strong>Constellation:</strong> <span style='color:red'>"+d['S. Constellation']+"</span><br>"+
    "<strong>Mass:</strong> <span style='color:red'>"+d['S. Mass (SU)']+ " SU"+"</span><br>";
    })
svg.call(tip);
svg.call(tip2);

var container = svg.append("g")
.attr("transform", "translate(" + w/2 + "," + h/2 + ")");

container.selectAll("g.planet").data(data).enter().append("g")
    // .on('mouseenter', suntip.show)
    .on('mouseenter', function(d){
        tip.show(d);
        tip2.show(d);
    })
    .on('mouseover',function(d){
        sun_size = d['S. Radius (SU)'] *100;
        sun_global_img.attr("x", w/2-sun_size/2).attr("y", h/2-sun_size/2).attr("height", sun_size).attr("width", sun_size);
    })
    .on('mouseout',function(){
        tip.hide();
        tip2.hide();
    })
    .attr("class", "planet").each(function(d, i) {
    //d3.select(this).append("circle").attr("class", "orbit")
    //  .attr("r", d['P. Mean Distance (AU)']*1000);
    d3.select(this).append("circle").attr("r", d['P. Radius (EU)']*5).attr("cx",d['P. Mean Distance (AU)']*900)
      .attr("cy", 0).attr("class", "planet").style("fill", (calculateColor(d['P. Ts Mean (K)'], t_min, t_max)))
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

})})});
