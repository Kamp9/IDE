treeJson = d3.json("donald2.json", function(error, treeData) {
    dTree.init(treeData, {
        target: "#graph",
        debug: true,
        height: 500,
        width: screen.width,//1400,
        callbacks: {
            nodeClick: function(name, extra) {
                window.open("http://www.google.com/search?q="+name);
                console.log(name);
            }
        }
    });
});
