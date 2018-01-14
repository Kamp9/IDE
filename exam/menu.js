var defaultText = "Change Data";

var root = {
    "name": "bubble",
    "children": [{
        "name": "Atlas",
        "description": "Atlas of Global Agriculture",
        "children": [{
            "name": "Geography",
            "address": "http://sunsp.net/portfolio.html",
            "note": "Global crop geography, including precipitation, temperature, crop area, etc."
        }, {
            "name": "Crop Land",
            "address": "http://sunsp.net/portfolio.html"
        }, {
            "name": "Crop Yields",
            "address": "http://sunsp.net/portfolio.html",
            "note": "Maize, wheat, rice, and soybean yields in 2000"
        }]
    }, {
        "name": "AgLab",
        "description": "Virtual Lab of Global Agriculture",
        "children": [{
            "name": "Excess Nutrient",
            "address": "http://d3js.org",
            "note": "Prototype Infographics on Excess Fertilizer Nutrients"
        }, {
            "name": "Yield Gap",
            "address": "http://uis.edu/ens",
            "note": "The gap between attainable yields and actual yields, with modeled yields assuming the percentage of gap closed."
        }, {
            "name": "Fertilizer",
            "address": "http://gli.environment.umn.edu"
        }]
    }, {
        "name": "Nutshell",
        "description": "Profiles of Country",
        "children": [{
            "name": "Efficiency",
            "address": "http://d3js.org"
        }, {
            "name": "Excess Nutrient",
            "address": "http://uis.edu/ens"
        }, {
            "name": "Economy",
            "address": "http://environment.umn.edu"
        }]
    }, {
        "name": "Data",
        "description": "Crop Data in 5 minutes grid",
        "children": [{
            "name": "Geography",
            "address": "http://www.earthstat.org/"
        }, {
            "name": "Crop Land",
            "address": "http://www.earthstat.org/"
        }, {
            "name": "Crop Yields",
            "address": "http://www.earthstat.org/"
        }]
    }]
};

var w1 = 1200;
var h1 = Math.ceil(w1 * 0.5);
var oR = 0;
var nTop = 0;

var svgContainer = d3.select("#mainBubble")
    .style("height", h1 + "px");

var svg = d3.select("#mainBubble").append("svg")
    .attr("class", "mainBubbleSVG")
    .attr("width", w1)
    .attr("height", h1)
    .on("mouseleave", function() {
        return resetBubbles();
    });

var mainNote = svg.append("text")
    .attr("id", "bubbleItemNote")
    .attr("x", 10)
    .attr("y", w1 / 2 - 100)
    .attr("font-size", 30)
    .attr("dominant-baseline", "middle")
    .attr("alignment-baseline", "middle")
    .style("fill", "#888888")
    .text(function(d) {
        return defaultText;
    });

var bubbleObj = svg.selectAll(".topBubble")
    .data(root.children)
    .enter().append("g")
    .attr("id", function(d, i) {
        return "topBubbleAndText_" + i
    });

console.log(root);
nTop = root.children.length;
oR = w1 / (1 + 3 * nTop);

h1 = Math.ceil(w1 / nTop * 2);
svgContainer.style("height", h1 + "px");

var colVals = d3.scaleOrdinal(d3.schemeCategory10);

bubbleObj.append("circle")
    .attr("class", "topBubble")
    .attr("id", function(d, i) {
        return "topBubble" + i;
    })
    .attr("r", function(d) {
        return oR;
    })
    .attr("cx", function(d, i) {
        return oR * (3 * (1 + i) - 1);
    })
    .attr("cy", (h1 + oR) / 3)
    .style("fill", function(d, i) {
        return colVals(i);
    }) // #1f77b4
    .style("opacity", 0.3)
    .on("mouseover", function(d, i) {
        return activateBubble(d, i);
    });


bubbleObj.append("text")
    .attr("class", "topBubbleText")
    .attr("x", function(d, i) {
        return oR * (3 * (1 + i) - 1);
    })
    .attr("y", (h1 + oR) / 3)
    .style("fill", function(d, i) {
        return colVals(i);
    }) // #1f77b4
    .attr("font-size", 30)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("alignment-baseline", "middle")
    .text(function(d) {
        return d.name
    })
    .on("mouseover", function(d, i) {
        return activateBubble(d, i);
    });


for (var iB = 0; iB < nTop; iB++) {
    var childBubbles = svg.selectAll(".childBubble" + iB)
        .data(root.children[iB].children)
        .enter().append("g");

    childBubbles.append("circle")
        .attr("class", "childBubble" + iB)
        .attr("id", function(d, i) {
            return "childBubble_" + iB + "sub_" + i;
        })
        .attr("r", function(d) {
            return oR / 3.0;
        })
        .attr("cx", function(d, i) {
            return (oR * (3 * (iB + 1) - 1) + oR * 1.5 * Math.cos((i - 1) * 45 / 180 * Math.PI));
        })
        .attr("cy", function(d, i) {
            return ((h1 + oR) / 3 + oR * 1.5 * Math.sin((i - 1) * 45 / 180 * Math.PI));
        })
        .attr("cursor", "pointer")
        .style("opacity", 0.5)
        .style("fill", "#eee")
        .on("click", function(d, i) {
            window.open(d.address);
        })
        .on("mouseover", function(d, i) {
            //window.alert("say something");
            var noteText = "";
            if (d.note == null || d.note == "") {
                noteText = d.address;
            } else {
                noteText = d.note;
            }
            d3.select("#bubbleItemNote").text(noteText);
        })
        .append("svg:title")
        .text(function(d) {
            return d.address;
        });

    childBubbles.append("text")
        .attr("class", "childBubbleText" + iB)
        .attr("x", function(d, i) {
            return (oR * (3 * (iB + 1) - 1) + oR * 1.5 * Math.cos((i - 1) * 45 / 180 * Math.PI));
        })
        .attr("y", function(d, i) {
            return ((h1 + oR) / 3 + oR * 1.5 * Math.sin((i - 1) * 45 / 180 * Math.PI));
        })
        .style("opacity", 0.5)
        .attr("text-anchor", "middle")
        .style("fill", function(d, i) {
            return colVals(iB);
        }) // #1f77b4
        .attr("font-size", 6)
        .attr("cursor", "pointer")
        .attr("dominant-baseline", "middle")
        .attr("alignment-baseline", "middle")
        .text(function(d) {
            return d.name
        })
        .on("click", function(d, i) {
            window.open(d.address);
        });

}


resetBubbles = function() {
    w1 = 1200;
    oR = w1 / (1 + 3 * nTop);

    h1 = Math.ceil(w1 / nTop * 2);
    svgContainer.style("height", h1 + "px");

    mainNote.attr("y", h1 - 100);

    svg.attr("width", w1);
    svg.attr("height", h1);

    d3.select("#bubbleItemNote").text(defaultText);

    var t = svg.transition()
        .duration(650);

    t.selectAll(".topBubble")
        .attr("r", function(d) {
            return oR;
        })
        .attr("cx", function(d, i) {
            return oR * (3 * (1 + i) - 1);
        })
        .attr("cy", (h1 + oR) / 3);

    t.selectAll(".topBubbleText")
        .attr("font-size", 30)
        .attr("x", function(d, i) {
            return oR * (3 * (1 + i) - 1);
        })
        .attr("y", (h1 + oR) / 3);

    for (var k = 0; k < nTop; k++) {
        t.selectAll(".childBubbleText" + k)
            .attr("x", function(d, i) {
                return (oR * (3 * (k + 1) - 1) + oR * 1.5 * Math.cos((i - 1) * 45 / 180 * Math.PI));
            })
            .attr("y", function(d, i) {
                return ((h1 + oR) / 3 + oR * 1.5 * Math.sin((i - 1) * 45 / 180 * Math.PI));
            })
            .attr("font-size", 6)
            .style("opacity", 0.5);

        t.selectAll(".childBubble" + k)
            .attr("r", function(d) {
                return oR / 3.0;
            })
            .style("opacity", 0.5)
            .attr("cx", function(d, i) {
                return (oR * (3 * (k + 1) - 1) + oR * 1.5 * Math.cos((i - 1) * 45 / 180 * Math.PI));
            })
            .attr("cy", function(d, i) {
                return ((h1 + oR) / 3 + oR * 1.5 * Math.sin((i - 1) * 45 / 180 * Math.PI));
            });
    }
}


function activateBubble(d, i) {
    var t = svg.transition()
        .duration(d3.event.altKey ? 7500 : 350);

    t.selectAll(".topBubble")
        .attr("cx", function(d, ii) {
            if (i == ii) {
                // Nothing to change
                return oR * (3 * (1 + ii) - 1) - 0.6 * oR * (ii - 1);
            } else {
                // Push away a little bit
                if (ii < i) {
                    // left side
                    return oR * 0.6 * (3 * (1 + ii) - 1);
                } else {
                    // right side
                    return oR * (nTop * 3 + 1) - oR * 0.6 * (3 * (nTop - ii) - 1);
                }
            }
        })
        .attr("r", function(d, ii) {
            if (i == ii)
                return oR * 1.8;
            else
                return oR * 0.8;
        });

    t.selectAll(".topBubbleText")
        .attr("x", function(d, ii) {
            if (i == ii) {
                // Nothing to change
                return oR * (3 * (1 + ii) - 1) - 0.6 * oR * (ii - 1);
            } else {
                // Push away a little bit
                if (ii < i) {
                    // left side
                    return oR * 0.6 * (3 * (1 + ii) - 1);
                } else {
                    // right side
                    return oR * (nTop * 3 + 1) - oR * 0.6 * (3 * (nTop - ii) - 1);
                }
            }
        })
        .attr("font-size", function(d, ii) {
            if (i == ii)
                return 30 * 1.5;
            else
                return 30 * 0.6;
        });

    var signSide = -1;
    for (var k = 0; k < nTop; k++) {
        signSide = 1;
        if (k < nTop / 2) signSide = 1;
        t.selectAll(".childBubbleText" + k)
            .attr("x", function(d, i) {
                return (oR * (3 * (k + 1) - 1) - 0.6 * oR * (k - 1) + signSide * oR * 2.5 * Math.cos((i - 1) * 45 / 180 * Math.PI));
            })
            .attr("y", function(d, i) {
                return ((h1 + oR) / 3 + signSide * oR * 2.5 * Math.sin((i - 1) * 45 / 180 * Math.PI));
            })
            .attr("font-size", function() {
                return (k == i) ? 12 : 6;
            })
            .style("opacity", function() {
                return (k == i) ? 1 : 0;
            });

        t.selectAll(".childBubble" + k)
            .attr("cx", function(d, i) {
                return (oR * (3 * (k + 1) - 1) - 0.6 * oR * (k - 1) + signSide * oR * 2.5 * Math.cos((i - 1) * 45 / 180 * Math.PI));
            })
            .attr("cy", function(d, i) {
                return ((h1 + oR) / 3 + signSide * oR * 2.5 * Math.sin((i - 1) * 45 / 180 * Math.PI));
            })
            .attr("r", function() {
                return (k == i) ? (oR * 0.55) : (oR / 3.0);
            })
            .style("opacity", function() {
                return (k == i) ? 1 : 0;
            });
    }
}

window.onresize = resetBubbles;
