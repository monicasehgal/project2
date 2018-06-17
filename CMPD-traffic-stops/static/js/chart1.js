function renderChart1() {
    Plotly.d3.json("/data_chart1"+getCurrentFilterParams(), function (error, response) {
        var $chartDiv = document.getElementById("chart1")

        var data_entries = unpack(response, 0)
        var data_counts = unpack(response, 1)
        var data_counts_category = unpack(response, 2)

        $chartDiv.innerHTML = "<p>" + String(data_entries).replace(/,/g, ", ") +
            "</p><p>" + String(data_counts).replace(/,/g, ", ") +
            "<p><p>" + String(data_counts_category).replace(/,/g, ", ");
    });
}