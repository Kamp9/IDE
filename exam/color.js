///////////////////////////////////////////////////////////////////////////
//////////////////// Set up and initiate svg containers ///////////////////
///////////////////////////////////////////////////////////////////////////

var somData = [
    38.2193453101216,33.020120773029,31.7807924365245,28.5162228652405,25.8765115311897,26.9870442843523,25.8636404573413,27.2351023013936,27.0202182049555,28.3801398707935,27.8799349753258,26.8105382815229,25.4953695573239,26.7254481293495,25.0818572157539,25.3024031084765,25.6680861415162,26.5607820147225,25.3280531699125,25.7540413884673,26.2954356904748,27.973405863739,26.8887942590823,26.5219167761773,26.043630062134,26.4409220954635,26.6577004058886,26.710482864653,25.2664776221984,27.2323899354711,34.4111906719027,32.4234996440721,29.8963606493154,29.1280730761604,26.3815186159375,25.8229712673559,27.8548836288696,28.8044647499776,27.5856400318691,27.4609343722648,28.2049017676136,25.2161052624013,24.8224315714855,24.806563463086,26.1151582491239,25.5211166909408,26.0180904856892,23.8035962261487,25.6463678132482,26.8530457276178,25.7784168660232,24.7430413707192,27.4371137867384,25.378860838464,27.8414255748023,25.4091439989787,24.4229420455188,23.9162218490174,25.7065956827934,25.6780148186109,38.7729640031501,34.2056301572248,30.4102894759445,30.7844202937604,29.0486528273772,28.9270918776383,22.4201141160791,24.8753774948952,28.1152874980377,26.9186678446674,26.6958273044124,27.6343779233213,25.3431041081171,25.1202953148256,24.8697683570792,25.0789109772934,25.2366317571879,23.2985254272131,25.8998720926769,27.4676912774205,25.7656822365713,24.0977702377503,24.5454043228993,25.578729899993,27.3186002351764,27.5285147680744,27.0571623652399,24.3269316618918,25.1389882048621,25.9965860536751,39.4953376400115,31.5334886309482,29.3736337226769,30.3542382210226,28.6902348387851,26.0668586047144,25.475659924738,24.7868089556462,26.010215869303,26.6037999924197,27.1741481277207,26.2434788121475,23.7415205871645,23.1362388910774,24.5332718510122,23.8998414729929,23.9457313143074,24.7146415600113,25.8170221531247,27.5007220251667,24.3875311327747,25.1737070322293,24.3927686486866,23.4245395344888,26.0187353516123,28.3297808420317,26.4348686326519,24.6101678778941,24.6845557756389,22.9418860001318,29.9652353385065,30.2053000365783,31.4606537558742,30.1479629058347,27.7213516072432,28.8661250609261,26.4112657332978,23.5098719481587,24.9473979740222,27.2541161230829,27.0013696364907,27.9647129546899,25.1375338531071,24.3529854682751,23.9312513957895,26.0343028379746,23.87302635663,22.7928727260949,26.0179726040772,27.3771578518824,25.4734109653208,24.9012197739925,25.0736572744134,25.2767205867819,25.1280939331434,24.3405355038782,25.5595180841604,23.9664522643439,22.8057125647914,22.9239128041527,29.2369638021695,29.1151824200556,29.4305712323595,27.318185896347,28.0707969854306,26.424935275968,26.1186702027417,23.4866323369142,25.1680665089741,27.948846051622,25.7616612275365,27.1580016059151,25.3629867060756,25.5462253458742,24.2829910043312,24.9153934469106,24.3771104039249,24.5376670182499,26.1957622609739,25.3515978871827,25.2160134575926,24.7164071063405,26.0683527448076,26.127541326265,25.2154706799988,28.7281637347421,28.7771176183584,24.4203392505691,24.4525987158063,21.615297382137,32.3694426633845,28.8054563531785,29.2311382826617,27.9375065226088,26.9610622072733,26.3518488346519,25.0165402747009,25.9532107158998,24.4008663245514,26.5287095006756,24.9300289404218,27.0423780437278,24.8529696712915,26.0005516675389,24.6694538091611,24.654792991387,24.487211280643,24.6887418424073,26.8566495691254,26.3392428345064,24.5941493430392,24.0128206959246,25.6936911094293,27.2089909077337,26.9801525730117,27.0113133921983,28.0452768341477,24.7726233616637,24.9750266240046,21.9628863966104,30.9906169199273,28.884075879866,27.3952074612876,26.9523356032079,24.9049046739381,25.5404026246996,24.2505498045073,26.4834766471769,25.8639161319873,26.9500585361948,25.7871261572919,26.6142003757156,25.3484132415404,28.2297292411913,25.071800858827,25.9750743361363,24.5587997939683,24.8846434484375,25.5070634348068,24.1134129114272,23.3825060749807,25.0592029771182,24.8757092418092,25.3688776274598,27.0861906696249,24.5443859970733,27.1415831186987,22.2563941189098,24.7172727701805,21.8130376266888,30.7643981753338,28.1237100886953,28.7221804660127,27.4669438650398,25.653518301863,25.313617405818,24.7332604220806,25.5232043620192,26.1678658793307,24.9683665497029,26.8480212801311,24.92497171727,27.8251619140298,27.20186179127,26.6091318771311,24.861351698699,25.433897064457,25.2284724371369,23.5210207695295,24.8162801638591,23.7747210164635,24.0791076153014,24.7699567851052,23.7328217218489,24.6043054318472,25.3547171774806,27.1967669350554,23.4767266146955,23.3293614328209,21.9632202620083,31.9120673654394,30.2221528204371,27.0489273477743,25.5949675729736,25.3017143662808,25.5253344054198,24.6225501009872,26.9215873193399,27.2708937931791,28.6121007126393,26.5027046154687,27.3704012551716,26.1993161478538,26.4040536457275,25.8838661574317,25.0950681912339,25.2432549814615,25.9358651288229,24.2413768200348,23.6766462933874,23.8722026023734,24.8343049034927,25.0324396431489,22.5916067939201,24.3584671035339,22.7285122185464,21.8671667812295,20.4654989281976,23.6954453252688,23.6817423595568,34.4728405287312,33.1510223691606,32.9793462292923,29.0358776048129,28.6054665675248,28.9827278787359,29.3638845023286,26.7987899801893,28.402424265323,27.3804655352126,27.2534013632306,27.1368264684383,27.7825687850757,25.9497162988162,25.3547979751792,26.1591110925415,25.0691517447405,25.3986389483316,24.2641330810026,22.6786139186354,22.7762123564837,23.6836866652087,24.0384316361549,23.8800213007139,22.2672716118434,23.5485351885966,21.0421931486547,22.2569920040668,22.8503753555803,25.8647660641653,34.7401105200476,32.7992401396413,33.6289279987359,31.8010995374308,29.5485109117933,29.1938280257727,30.0313394890792,29.4380594444791,28.3509202953959,26.8064832021604,28.0462337408102,27.6727547070175,26.5304539737713,25.1887275557566,26.949127330485,25.9626708893491,24.0924090591614,23.7539273763693,22.9387195912807,22.2429719234857,21.0337051117656,23.8106789857633,25.1039048402591,24.3157512758701,22.4213288267696,20.8819420056309,23.0553840748856,22.0262762949859,24.2379349967116,24.8616724971045,34.9607382814996,37.6515074391123,34.1983208183156,35.2842959508722,29.68300939208,29.2574688553368,28.6325851742033,28.6337340117232,27.748499475592,29.0706574988211,26.7442851274947,27.3449896695197,26.7143905741314,24.1274144097127,25.4228805001795,25.0392953215515,23.3226710580088,24.553780056859,24.4178949300561,23.8141144065405,20.7220105172926,21.8480279328673,25.6056054929952,24.2472035257108,24.4210885085978,22.8223798200544,22.4141285310558,23.2619625684504,23.6801672732722,25.1450137746962,37.8025375170248,36.8015715001263,33.3660040245553,28.9081364816202,29.3277731988661,31.5421228812257,30.464320885463,31.0126989257048,27.6305151785901,27.6063079270634,26.3162214448371,25.3178391736306,25.4684057340495,23.5316865574673,23.7256416689121,24.5871079128915,23.4258905208838,22.7148944075199,23.5006920723998,22.5021456898926,20.5993361665308,21.6111168796026,22.989223296074,24.5547239050824,23.9378506040749,20.8033610842521,23.7604311445806,24.4850017511201,25.4269949437035,26.7540417597703,37.0336469307728,36.7340786262131,34.4915460371071,31.1790111439649,31.8488974230787,31.0517536248522,32.820453426231,32.7310136439433,29.7823163882009,32.4436282133301,26.1634971544153,26.783707411989,25.8528944349204,22.8529520259067,25.2648897404528,24.475596132505,23.634096959408,22.6104013190684,24.7110224497352,22.1884804678685,23.3632206839582,22.9302280598597,23.3275984195399,22.4662205498488,21.6104584092015,23.1526413852675,22.1476075615046,22.7362007271532,24.3761273806013,25.4726101561521,40.2354526685028,37.0895464008698,35.4209063406966,33.7364553993894,30.946613595036,35.0917429964027,33.2164320701731,34.1032829548588,31.862637924954,29.8316520819322,27.6869203978869,26.3672600316582,26.0940185367167,24.2385126880488,23.9721867018572,24.062665648531,23.3979348562403,22.809191803248,20.4033532086702,20.9300978771792,21.2529140872146,21.0976684307715,23.1048428738577,20.5346114520467,19.8723434073117,23.7432011110265,23.6768765019415,23.3246436790924,23.9074929825757,27.4922300014401,40.122347559094,39.8379210277334,36.7006933825997,36.606629789619,33.2118893448596,31.0419140775224,31.9765572873663,32.3327578680919,34.6396275861878,30.8611302186963,29.0948285048773,27.6556890805151,27.3834806915894,26.461704742091,24.0154404956285,24.5005724674976,23.0573950648667,22.2405457918698,20.4395910456644,20.1707338561524,22.0282316340877,21.4215312693068,22.8901614766977,22.3717503898389,23.8280712951884,23.7530660491994,23.1198821467912,24.2441356538891,22.6190922146902,24.8673080257243,39.0154783876639,39.2040954726829,34.5868168887056,33.2947676889519,32.4176366425211,29.6811081541038,30.6111536267832,32.5045972109552,30.958873322424,29.8845064003457,28.4364689348902,27.3195812326622,26.2381407143913,25.8208116781197,25.7943336642706,24.027939664061,23.9835607196053,20.7371703425297,20.4266295584787,22.4365129811028,23.6890497988181,22.7479520285407,23.8344532517078,22.9679179347516,23.8560464858167,22.5412291427257,24.4535568471538,22.8425781065271,23.9878114903815,23.0219762430535,36.2039643685563,36.777064818767,40.1865626495828,38.0277296734647,31.3621007947969,30.9553974840096,29.0174438061303,25.5571378212106,28.7818097896778,28.3196741122843,29.0287021174777,26.2359729056487,26.5612465924285,23.9152636123562,23.3979652979572,23.766463501079,22.7607722949597,21.6921166115195,19.8544780082748,21.3196482921865,21.9816972739804,24.5896954181483,23.6224512054549,23.2086596538105,22.801772849191,21.053622982771,23.5999410843533,22.3715636306793,21.1875483146076,21.3594885401651,32.276905952956,35.9222623252586,39.1729627736458,35.899819890848,34.5789947358694,30.8866080112616,29.7738651724678,25.4642475345368,23.9325004752954,28.6512269466668,31.0168929992435,24.4897991957707,22.9444377693144,22.3473415579198,24.0757529087556,22.8910055084283,21.1821119758902,19.4849420391304,19.2010446520031,19.8374524993514,24.3092688586111,25.8308666502423,23.9811102657072,21.9649317546019,22.1733682959731,20.5861343023296,21.727638340022,22.361422189204,19.3144562892348,19.6751313173216
];

var MapColumns = 30,
    MapRows = 20;

var margin = {
    top: 140,
    right: 30,
    bottom: 120,
    left: 30
};

//First try for width
var width = Math.max(Math.min(window.innerWidth, 1000), 500) - margin.left - margin.right - 20;
var height = window.innerHeight - margin.top - margin.bottom - 20;

//The maximum radius the hexagons can have to still fit the screen
var hexRadius = d3.min([width/(Math.sqrt(3)*MapColumns), height/(MapRows*1.5)]);

//Set the new height and width based on the max possible
var width = MapColumns*hexRadius*Math.sqrt(3);
var height = MapRows*1.5*hexRadius+0.5*hexRadius;

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

///////////////////////////////////////////////////////////////////////////
//////////////// Calculate hexagon centers and put into array /////////////
///////////////////////////////////////////////////////////////////////////

var SQRT3 = Math.sqrt(3),
    hexWidth = SQRT3 * hexRadius,
    hexHeight = 2 * hexRadius;
var hexagonPoly = [[0,-1],[SQRT3/2,0.5],[0,1],[-SQRT3/2,0.5],[-SQRT3/2,-0.5],[0,-1],[SQRT3/2,-0.5]];
var hexagonPath = "m" + hexagonPoly.map(function(p){ return [p[0]*hexRadius, p[1]*hexRadius].join(','); }).join('l') + "z";

var points = [];
for (var i = 0; i < MapRows; i++) {
    for (var j = 0; j < MapColumns; j++) {
        var a;
        var b = (3 * i) * hexRadius / 2;
        if (i % 2 === 0) {
            a = SQRT3 * j * hexRadius;
        } else {
            a = SQRT3 * (j - 0.5) * hexRadius;
        }//else
        points.push({x: a, y: b});
    }//for j
}//for i

///////////////////////////////////////////////////////////////////////////
//////// Get continuous color scale for the Yellow-Green-Blue fill ////////
///////////////////////////////////////////////////////////////////////////

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
    .domain(d3.extent(somData))
    .range([0,1]);

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
var colorInterpolateRainbow = d3.scaleLinear()
    .domain(d3.extent(somData))
    .range([0,1]);

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

//Append title to the top
svg.append("text")
    .attr("class", "title")
    .attr("x", width/2-10)
    .attr("y", -80)
    .text("Clustering of Supermarkets");
svg.append("text")
    .attr("class", "subtitle")
    .attr("x", width/2-10)
    .attr("y", -58)
    .text("based on demographics");
svg.append("text")
    .attr("class", "subtitle")
    .attr("x", width/2-10)
    .attr("y", -30)
    .style("font-weight", 800)
    .style("fill", "#676767")
    .text("click anywhere to switch colors");

svg.append("g")
    .selectAll(".hexagon")
    .data(points)
    .enter().append("path")
    .attr("class", "hexagon")
    .attr("d", function (d) { return "M" + d.x + "," + d.y + hexagonPath; })
    .style("stroke", "#fff")
    .style("stroke-width", "1px")
    .style("fill", "white")
    .on("mouseover", mover)
    .on("mouseout", mout);

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

//Append title
legendsvg.append("text")
    .attr("class", "legendTitle")
    .attr("x", 0)
    .attr("y", -2)
    .text("Store Competition Index");

//Set scale for x-axis
var xScale = d3.scaleLinear()
    .range([0, legendWidth])
    .domain([0,100]);
//.domain([d3.min(pt.legendSOM.colorData)/100, d3.max(pt.legendSOM.colorData)/100]);

//Define x-axis
// var axis = d3.axisBottom(linear)

var xAxis = d3.axisBottom()
    .ticks(5)  //Set rough # of ticks
    //.tickFormat(formatPercent)
    .scale(xScale);

//Set up X axis
legendsvg.append("g")
    .attr("class", "axis")  //Assign "axis" class
    .attr("transform", "translate(" + (-legendWidth/2) + "," + (10 + legendHeight) + ")")
    .call(xAxis);

///////////////////////////////////////////////////////////////////////////
////////////////////////// Mouse Interactions /////////////////////////////
///////////////////////////////////////////////////////////////////////////

//Function to call when you mouseover a node
function mover(d) {
    var el = d3.select(this)
        .transition()
        .duration(10)
        .style("fill-opacity", 0.3);
}

//Mouseout function
function mout(d) {
    var el = d3.select(this)
        .transition()
        .duration(1000)
        .style("fill-opacity", 1);
};

///////////////////////////////////////////////////////////////////////////
////////////////////////// Color Interactions /////////////////////////////
///////////////////////////////////////////////////////////////////////////

//On click transition
d3.select("body").on("click", function() {
    if(currentFill === "rainbow") {
        updateYGB();
        currentFill = "YGB";
    } else {
        updateRainbow();
        currentFill = "rainbow";
    }//else
});

//Update the colors to a more light yellow-green-dark blue
function updateYGB() {
    //Fill the legend rectangle
    svg.select(".legendRect")
        .style("fill", "url(#gradient-ygb-colors)");
    //Transition the hexagon colors
    svg.selectAll(".hexagon")
        .transition().duration(1000)
        .style("fill", function (d,i) { return colorScaleYGB(colorInterpolateYGB(somData[i])); });
}//updateYGB

//Transition the colors to a rainbow
function updateRainbow() {
    //Fill the legend rectangle
    svg.select(".legendRect")
        .style("fill", "url(#gradient-rainbow-colors)");
    //Transition the hexagon colors
    svg.selectAll(".hexagon")
        .transition().duration(1000)
        .style("fill", function (d,i) { return colorScaleRainbow(colorInterpolateRainbow(somData[i])); })
}//updateRainbow

//Start set-up
updateRainbow();
var currentFill = "rainbow";
