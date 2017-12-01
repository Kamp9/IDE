d3.select(window).on('load', init);

function init() {
  d3.text(
    'station.txt', 
    function(error, data) {
      if (error) throw error;
      console.log(data);
    });
}
