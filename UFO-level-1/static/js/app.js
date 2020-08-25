// from data.js
var tableData = data;
// Console.log the data from data.js
// console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach((data) => {
    // Append a row for each object in tableData
    var row = tbody.append("tr");

    Object.entries(data).forEach(([key, value]) =>{
        // Append a cell to the row for each value in the data object
        var cell = row.append("td");
        cell.text(value);
    });
});