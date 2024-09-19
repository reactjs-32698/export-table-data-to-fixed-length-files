import {batch2Columns, optionsArray} from "./constants.js";

export function initializeSelectBox() {
    // Step 1: Create a <select> element
    const selectElement = document.getElementById('comboBox');

    // Step 2: Loop through the array and create <option> elements
    optionsArray.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.value; // Set the value
        optionElement.textContent = option.name; // Set the display text
        selectElement.appendChild(optionElement); // Append the option to the select
    });
}

// Function to initialize table header based on columns array
export function initializeTable() {
    let columns = batch2Columns.get('');
    const headerRow = document.getElementById('tableHeader');
    headerRow.innerHTML = '';
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0]
    tableBody.innerHTML = '';
    columns.forEach(col => {
        const th = document.createElement('th');
        th.innerText = col.name + ' (' + col.length + ')';
        headerRow.appendChild(th);
    });

    // Adding some default rows for demonstration
    const row = new Array(columns.length).fill('');
    const defaultRows = [
        row
    ];

    defaultRows.forEach(rowData => addRow(rowData));
}