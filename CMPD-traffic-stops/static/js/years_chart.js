

function renderYearsChart(data) {
    var $chartDiv = document.getElementById("years_chart")
    console.log(data);
    var years = unpack(data, 0);
    var years_counts = unpack(data, 1);
    $chartDiv.innerHTML = "<p>"+years+"</p><p>"+years_counts;
  }
