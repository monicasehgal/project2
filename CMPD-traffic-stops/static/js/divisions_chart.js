

function renderDivisionsChart(data) {

  var data_entries = unpack(data, 0);
  var data_counts = unpack(data, 1);
  console.log(data_entries);
  console.log(data_counts);

  document.getElementById('mapper').contentWindow.location.reload(true);




}
