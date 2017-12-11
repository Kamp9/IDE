treeJson = d3.json("tree.json", function(error, treeData) {
    dTree.init(treeData, {
        target: "#graph",
        debug: true,
        height: 800,
        width: 1200,
        callbacks: {
            nodeClick: function(name, extra) {
                console.log(name);
            }
        }
    });
});