

function renderYearsChart(data) {
  var $chartDiv = document.getElementById("years_chart")

  var years = unpack(data, 0);
  var years_counts = unpack(data, 1);

  var trace3 = {
    labels: years,
    values: years_counts,
    type: "pie"
  };

  var data = [trace3];

  Plotly.newPlot("years_chart", data);
}
