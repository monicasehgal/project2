
function renderReasonsChart(data) {
  var $reasonsDiv = document.getElementById("reasons_chart")

  var data_entries = unpack(data, 0);
  var data_counts = unpack(data, 1);

  $reasonsDiv.innerHTML = "<p>"+String(data_entries).replace(/,/g ,", ")+"</p><p>"+String(data_counts).replace(/,/g ,", ")+"<p>";
}