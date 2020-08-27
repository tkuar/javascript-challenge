// From data.js
var tableData = data;

// Console.log the data from data.js
// console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach(data => {

    // Append a row for each object in tableData
    var row = tbody.append("tr");

    Object.entries(data).forEach(([key, value]) => {

        // Append a cell to the row for each value in the data object
        var cell = row.append("td");
        cell.text(value);

        // console.log(key,value);
    });
});

// Get a reference to the filter table button
var button = d3.select("#filter-btn");

// Use D3 `.on` to attach a click handler for the filter table button
button.on("click", () => {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Clear the existing table
    tbody.html("");

    // Select and get the value property of the input elements
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value").trim().toLowerCase();
    var state = d3.select("#state").property("value").trim().toLowerCase();
    var country = d3.select("#country").property("value").trim().toLowerCase();
    var shape = d3.select("#shape").property("value").trim().toLowerCase();
    // console.log(inputValue);

    // Filter table data by the input value (in this case the datetime)
    var filterData;

    // Check if inputs are not null before filtering data
    if (date !== "" ){
        filterData = tableData.filter(sighting => sighting.datetime === date);
    }
    if (city !== "" ){
        filterData = tableData.filter(sighting => sighting.city === city);
    }
    if (state !== "" ){
        filterData = tableData.filter(sighting => sighting.state === state);
    }
    if (country !== "" ){
        filterData = tableData.filter(sighting => sighting.country === country);
    }
    if (shape !== "" ){
        filterData = tableData.filter(sighting => sighting.shape === shape);
    }
    
    // Create the filtered table
    filterData.forEach(data => {

        // Append a row for each object in tableData
        var row = tbody.append('tr');

        // Append a cell to the row for each value in the data object
        Object.entries(data).forEach(([key, value]) => {

            // Append a cell to the row for each value in the data object
            var cell = row.append('td');
            cell.text(value);

            // console.log(key, value);
        });
    });

});