
function renderReasonsChart(data) {
  var $reasonsDiv = document.getElementById("reasons_chart")

  var data_entries = unpack(data, 0);
  var data_counts = unpack(data, 1);

  var trace1 = {
    y: data_counts,
    x: data_entries,
    text: data_entries,
    textposition: 'outside',
    hoverinfo: 'none',
    marker: {
      color: 'rgba(55,128,191,0.6)',
      width: 1
    },
    type: 'bar'
  };
     
   
     
  var data = [trace1];


  var layout = {
    // autosize: false,
    // width: 350,
    height: 200,
    textangle: 90,
    titlefont: chart_title_style,
    font: chart_label_style,
    margin: {
      l: 50,
      r: 50,
      b: 0,
      t: 0
    }
  };

     
  Plotly.newPlot('reasons_chart', data, layout);
}