
function renderResultsChart(data) {
    var $resultsDiv = document.getElementById("results_chart")
    var data_entries = unpack(data, 0);
    var data_counts = unpack(data, 1);

    $resultsDiv.innerHTML = "<p>"+String(data_entries).replace(/,/g ,", ")+"</p><p>"+String(data_counts).replace(/,/g ,", ")+"<p>";

  }