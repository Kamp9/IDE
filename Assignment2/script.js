d3.select(window).on('load', init);

function init() {
  d3.csv(
    'data.csv', 
    function(error, data) {
      if (error) throw error;
      console.log(data);
    });
}
