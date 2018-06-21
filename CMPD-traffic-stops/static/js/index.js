
// the function extracts values of a given field (by index) from a JSON
function unpack(rows, index) {
    return rows.map(function (row) {
        return row[index];
    });
}

// the function creates a string with current filter parameters to be used in GET requests to JSON API
function getCurrentFilterParams() {
    var param_string = "";
    param_string += "?division=" + division_filter + "&reason=" + reason_filter + "&result=" + result_filter+"&year="+year_filter;
    return param_string;
}

// the function renders Division, Reason and Result charts
function renderControlCharts() {
    Plotly.d3.json("/data"+getCurrentFilterParams(), function (error, response) {
        // renderDivisionsChart(response.division_data);
        document.getElementById('mapper').contentWindow.location.reload(true);
        renderReasonsChart(response.reason_data);
        renderResultsChart(response.result_data);
        renderYearsChart(response.year_data);
        renderStats(response.count);
    });
}

// Dataset filter parameters
var division_filter = ""
var reason_filter = ""
var result_filter = ""
var year_filter=""

// the function renders all charts, will be called on each choice made on control charts (Division, Reason and Result charts)
function renderAllCharts() {
    renderControlCharts();
 //   renderTimeChart();
    renderChart1();
}




// Charts styling parameters
var chart_title_style = {
    family: 'Arial, sans-serif',
    size: 18,
    color: 'grey'
}

var chart_label_style = {
    family: 'Arial, sans-serif',
    size: 12,
    color: 'black'
}

renderAllCharts();
