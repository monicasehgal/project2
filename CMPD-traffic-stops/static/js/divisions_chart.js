

function renderDivisionsChart(data) {
    var $divisionsDiv = document.getElementById("divisions_chart")
    console.log(data);
    var data_entries = unpack(data, 0);
    var data_counts = unpack(data, 1);

    $divisionsDiv.innerHTML = "<p>" + String(data_entries).replace(/,/g, ", ") +
    "</p><p>" + String(data_counts).replace(/,/g, ", ");

  }
