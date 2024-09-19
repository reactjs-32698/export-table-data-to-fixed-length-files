import {batch2Columns, optionsArray} from "./shared/constants.js";
import {convertTableToFixedLength} from "./convert/convert-table-to-fixed-length-file.js";
import {convertTableToCSV} from "./convert/convert-table-to-csv-file.js";

let columns = batch2Columns[''];

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

// Function to add a new row to the table
export function addRow(data = []) {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    columns.forEach((col, index) => {
        const newCell = newRow.insertCell();
        const input = document.createElement('input');
        input.type = 'text';
        input.value = data[index] || '';
        input.setAttribute('maxlength', '' + col.length);
        if (col.invisible) {
            input.setAttribute('readonly', true);
            input.value = col.value;
        }
        newCell.appendChild(input);
    });
}

// Function to handle combobox change
export function handleComboBoxChange() {
    const comboBox = document.getElementById('comboBox');
    const selectedValue = comboBox.value;

    columns = batch2Columns[selectedValue];
    initializeTable();
}

// Initialize the table on page load
window.onload = initializeTable;

// Initialize the select box on page load
window.onload = initializeSelectBox;

document.getElementById('comboBox').onchange = handleComboBoxChange;
document.getElementById('addRowBtn').onclick = addRow;
document.getElementById('convertFixedLengthBtn').onclick = convertTableToFixedLength;
document.getElementById('convertCSVBtn').onclick = convertTableToCSV;