
function unpack(rows, index) {
    return rows.map(function (row) {
        return row[index];
    });
}

var queryUrl = `/data`;
Plotly.d3.json(queryUrl, function (error, response) {

    renderDivisionsChart(response.division_data);
    renderReasonsChart(response.reason_data);
    renderResultsChart(response.result_data);
    renderTimeChart(response.time_data);
//    renderChart1();
    renderStats(response.count);
    

});





