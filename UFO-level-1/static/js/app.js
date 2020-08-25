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

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // console.log(inputValue);

    // Filter table data by the input value (in this case the datetime)
    var filterData = tableData.filter(sighting => sighting.datetime === inputValue);

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