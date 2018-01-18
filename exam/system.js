var w = 1370, h = 1200;
var t0 = Date.now();

var slowdown = 1;
var sun_global_img = null;

var num_planets = 50;

slider_mode = 0;
function slider_changer(inp){
    d3.selectAll("button").style("background-color", "#444444");
    
    d3.selectAll("#but"+inp).style("background-color", "#585859");
    // console.log(tmp)
 
    slider_mode = inp;
}

current_data = 1;
function data_changer(inp){
    change_dataset(inp);
}




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
        d['Norm Distance'] = + d['Norm Distance']
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
            d['Norm Distance'] = + d['Norm Distance']

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
      d['Norm Distance'] = + d['Norm Distance']
    tmp = Math.floor((Math.random() * 36) + 1)*10;
    d.phi0 = tmp;
    if (d['P. Ts Mean (K)'] > t_max) {
        t_max = d['P. Ts Mean (K)'];
    }
    if (d['P. Ts Mean (K)'] < t_min) {
        t_min = d['P. Ts Mean (K)'];
    }
  });
console.log(data);

// Create Slider
var svgslider = d3.select("#svgslider"),
    margin = {right: 50, left: 50},
    width = +svgslider.attr("width") - margin.left - margin.right,
    height = +svgslider.attr("height");

var x = d3.scaleLinear()
    .domain([0, 100]) // sets width. may work for other datasets. time will show
    .range([0, width])
    .clamp(true);

var slider = svgslider.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

slider.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
    .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
    .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider.interrupt(); })
        .on("start drag", function() { select_planets(x.invert(d3.event.x)); }));

slider.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 22 + ")")
    .selectAll("text")
    .data(x.ticks(10))
    .enter().append("text")
    .attr("x", x)
    .attr("text-anchor", "middle")
    .text(function(d) { return d + "%" ; });

var handle = slider.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9)
    .attr("cx",x(100));


d3.select("#but3").on('click',function(d){
            select_planets(3);
        })


d3.select("#butdat").on('click',function(d){
            change_dataset(2);
        })


function select_planets(h) {
    num_planets = Math.floor(h);
    switch(slider_mode) {
    case 0:
        container.selectAll("g.planet").filter(function(d, i) { return i < num_planets}).attr("opacity",1)
        container.selectAll("g.planet").filter(function(d, i) { return i >= num_planets}).attr("opacity",0)
        break;
    case 1:
        container.selectAll("g.planet").filter(function(d, i) { return d['Norm Distance'] < h/100}).attr("opacity",1)
        container.selectAll("g.planet").filter(function(d, i) { return d['Norm Distance'] > h/100}).attr("opacity",0)
        break;
    case 2:
        container.selectAll("g.planet").filter(function(d, i) { return (d['P. Ts Mean (K)']-t_min) / (t_max-t_min) < h/100}).attr("opacity",1)
        container.selectAll("g.planet").filter(function(d, i) { return (d['P. Ts Mean (K)']-t_min) / (t_max-t_min) > h/100}).attr("opacity",0)
        break;
    case 3:
        container.selectAll("g.planet").attr("opacity",0)
        break;
        // container.selectAll("g.planet").filter(function(d, i) { return (d['P. Name']=="KOI-571.05"}).attr("opacity",0);
    default:
    }


    handle.attr("cx", x(h));
    // svgslider.style("background-color", d3.hsl(h, 0.8, 0.8));
}


function calculateColor(t, min_t, max_t) {
    var temp_range = 255.0 / (max_t - min_t);
    var temp_mean = (max_t + min_t) / 2.0;
    var r = 255 - Math.abs(max_t - t) * temp_range;
    var g = 255 - Math.abs(temp_mean - t) * temp_range * 2;
    var b = 255 - Math.abs(min_t - t) * temp_range;
    return d3.rgb(Math.floor(r), Math.floor(g), Math.floor(b));
}


// Create Planetarium
var svg = d3.select("#planetarium").insert("svg")
  .attr("width", w).attr("height", h)
  .on("mouseover",function(d){
    slowdown = 0;
    // tip3.show();

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

svg.append("g").append("circle").attr("cx", w/2).attr("cy", h/2).attr("class","orbit").attr("r",(0.05+0.735)*h/2).attr("fill","none").attr("stroke","#ffffff");

// svg.append("g").append("rect").attr("x",5).attr("y",10).attr("stroke","#ffffff").style("fill","none")
//     .attr("width","300").attr("height",100);
// svg.append("text").text("HUEHUEHUE").attr("x",10).attr("y",35).attr("fill",'white');
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

var tip3 = d3.tip()
  .attr('class', 'd3-tip3')
  .attr('id',"hej")
  .html(function() {
    return "<strong>Name:</strong> <span style='color:red'>" + 1 + "</span><br>"+
           "<strong>Mass:</strong> <span style='color:red'>" + 1 +" EU" +"</span><br>"+
           "<strong>Radius:</strong> <span style='color:red'>" + 1 + "</span><br>"+
           "<strong>Perioid (days):</strong> <span style='color:red'>" + 1 + "</span><br>"+
           "<strong>Mean distance to sun (AU):</strong> <span style='color:red'>" + 1 + "</span><br>"+
           "<strong>Mean Temp:</strong> <span style='color:red'>" + 1 + "</span><br>";
  })


svg.call(tip);
svg.call(tip2);
svg.call(tip3);



function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}
var offsets = document.getElementById('planetarium');
var positions = (getPos(offsets));
// var top1 = offsets.top;
// var left1 = offsets.left;

// console.log(top1);
// console.log(left1);
d3.select("#hej").style("top",positions.y).style("left",positions.x).style("opacity",1).attr("test",0);


var container = svg.append("g")
.attr("transform", "translate(" + w/2 + "," + h/2 + ")");


var speed = 0;
d3.timer(function() {
  var delta = (Date.now() - t0);
  svg.selectAll(".planet").attr("transform", function(d) {
    if(slowdown===1){
        speed += 0.15;
    }else{
        speed += 0.02;
    }
    // console.log(d.phi0 + speed * (1/d['P. Period (days)'])/2);
    return "rotate(" + d.phi0 + speed * (1/d['P. Period (days)'])/2 + ")";
  });
});


change_dataset(1);

function change_dataset(use_dataset) {
    use_dataset = current_data;
    if (use_dataset === 1) {
        use_min = t_min;
        use_max = t_max;
        use_data = data;
    }
    if (use_dataset === 2) {
        use_min = t_min2;
        use_max = t_max2;
        use_data = data2;
    }
    if (use_dataset === 3) {
        use_min = t_min3;
        use_max = t_max3;
        use_data = data3;
    }
    container.selectAll("g.planet").remove();
    container.selectAll("g.planet").data(use_data).enter().append("g")
        .attr("opacity",1)
        .on('mouseenter', function(d){
        if(d3.select(this).attr("opacity") ==1){    
            tip.show(d);
            tip2.show(d);
        }
        })
        .on('mouseover',function(d){
            if(d3.select(this).attr("opacity") ==1){    
                sun_size = d['S. Radius (SU)'] *100;
                sun_global_img.attr("x", w/2-sun_size/2).attr("y", h/2-sun_size/2).attr("height", sun_size).attr("width", sun_size);
            }
        })
        .on('mouseout',function(){
            if(d3.select(this).attr("opacity") ==1){    
                tip.hide();
                tip2.hide();
            }
        })
        .attr("class", "planet").each(function(d, i) {
        d3.select(this).append("circle").attr("r", d['P. Radius (EU)']*5).attr("cx",(0.05+d['Norm Distance'])*h/2)
            .attr("cy", 0).attr("class", "planet").style("fill", (calculateColor(d['P. Ts Mean (K)'], use_min, use_max)))
    });

    // d3.select("g.planet").append("circle").attr("class","orbit").attr("r",(0.05+0.735)*h/2).attr("fill","none").attr("stroke","#ffffff");
    // sun_global_img.append("g").append("circle").attr("class","orbit").attr("r",(0.05+0.735)*h/2).attr("fill","none").attr("stroke","#ffffff");
}


var sse50 = function () {
    return {
        initMenu: function () {
            var m = document.getElementById('sses50');
            if (!m) return;
            m.style.width = m.getElementsByTagName("ul")[0].offsetWidth + 1 + "px";
            var url = document.location.href.toLowerCase();
            var a = m.getElementsByTagName("a");
            var k = -1;
            var l = -1;
            var hasEnd = 0;
            for (var i = 0; i < a.length; i++) {
                if (a[i].href && url.indexOf(a[i].href.toLowerCase()) != -1 && a[i].href.length > l) {
                    k = i;
                    l = a[i].href.length;
                }
                if (a[i].className == "end")
                    hasEnd = 1;
            }
            if (k == -1 && /:\/\/(?:www\.)?[^.\/]+?\.[^.\/]+\/?$/.test) {
                for (var i = 0; i < a.length; i++) {
                    if (a[i].getAttribute("maptopuredomain") == "true") {
                        k = i;
                        break;
                    }
                }
                if (k == -1 && a[0].getAttribute("maptopuredomain") != "false")
                    k = 0;
            }
            if (k > -1) {
                a[k].className = 'current';
            }
            l = a.length;
            if (hasEnd) l--;
            for (i = 0; i < l; i++) {
                a[i].onmouseover = function () {
                    console.log("ARGGG");
                    for (j = 0; j < l; j++) {
                        a[j].className = '';
                    }
                    this.className = 'current';
                };
                a[i].onmouseout = function () {
                    for (j = 0; j < l; j++) {
                        a[j].className = '';
                        if (k > -1) {
                            a[k].className = 'current';
                        }
                    }
                };
            }
        }
    };
} ();

if (window.addEventListener) {
    window.addEventListener("load", sse50.initMenu, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", sse50.initMenu);
}
else {
    window["onload"] = sse50.initMenu;
}



})})});
