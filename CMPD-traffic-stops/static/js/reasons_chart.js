
function renderReasonsChart(data) {
  var $reasonsDiv = document.getElementById("reasons_chart")

  var data_entries = unpack(data, 0);
  var data_counts = unpack(data, 1);

  var trace1 = {
    y: data_counts,
    x: data_entries,
    name: 'Yes',
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
    height: 300,
    title: 'Reason for Stop',
    titlefont: chart_title_style,
    font: chart_label_style,
    margin: {
      l: 100,
      r: 0,
      b: 30,
      t: 30
    }
  };

     
  Plotly.newPlot('reasons_chart', data, layout);
}