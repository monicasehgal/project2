
function renderResultsChart(data) {
    var $resultsDiv = document.getElementById("results_chart")
    var data_entries = unpack(data, 0);
    var data_counts = unpack(data, 1);

    var trace1 = {
      x: data_counts,
      y: data_entries,
      name: 'Yes',
      orientation: 'h',
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
      title: 'Result of Stop',
      titlefont: chart_title_style,
      font: chart_label_style,
      margin: {
        l: 100,
        r: 0,
        b: 30,
        t: 30
      }
    };
       
    Plotly.newPlot('results_chart', data, layout);
  }