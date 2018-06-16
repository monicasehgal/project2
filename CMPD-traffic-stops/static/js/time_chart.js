
function renderTimeChart(data) {
    var $timeDiv = document.getElementById("time_chart")

    var data_entries = unpack(data, 0);
    var data_counts = unpack(data, 1);
    var data_counts_category = unpack(data, 2);

    $timeDiv.innerHTML = "<p>"+String(data_entries).replace(/,/g ,", ")+"</p><p>"+String(data_counts).replace(/,/g ,", ")+"<p><p>"+String(data_counts_category).replace(/,/g ,", ");
  
}