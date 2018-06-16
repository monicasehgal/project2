

function renderDivisionsChart(data) {
    var $divisionsDiv = document.getElementById("divisions_chart")
    console.log(data);
    var divisions = unpack(data, 0);
    var divisions_counts = unpack(data, 1);
    $divisionsDiv.innerHTML = "<p>"+divisions+"</p><p>"+divisions_counts;
  }