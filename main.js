import {batch2Header, batch2Trailer, batch2Separator, batch2Columns, optionsArray} from "./constants.js";

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

let columns = batch2Columns[''];

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

// Function to pad string to fixed length
export function padString(str, length) {
    return str.padEnd(length, ' ');
}

export function convertTableToCSV() {
    const comboBox = document.getElementById('comboBox');
    const selectedValue = comboBox.value;

    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');
    let csvText = '';
    if (batch2Header[selectedValue]) {
        csvText += batch2Header[selectedValue] + '\n'
    }

    for (let i = 1; i < rows.length; i++) { // Start from 1 to skip the header row
        const inputs = rows[i].getElementsByTagName('input');
        for (let j = 0; j < inputs.length; j++) {
            csvText += inputs[j].value + batch2Separator[selectedValue] || '~';
        }
        csvText = csvText.substring(0, csvText.length - 1);
        csvText += '\n';
    }

    if (batch2Trailer[selectedValue]) {
        csvText += batch2Trailer[selectedValue] + '\n';
    }

    // Create a blob and generate a download link
    const blob = new Blob([csvText], { type: 'text/plain' });
    const link = document.getElementById('downloadLink');
    link.href = URL.createObjectURL(blob);
    link.download = 'csv.txt';
    link.style.display = 'block';
    link.innerText = 'Download CSV';
}

// Function to convert table to fixed length file
export function convertTableToFixedLength() {
    const comboBox = document.getElementById('comboBox');
    const selectedValue = comboBox.value;

    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');
    let fixedLengthText = '';
    if (batch2Header[selectedValue]) {
        fixedLengthText += batch2Header[selectedValue] + '\n'
    }

    for (let i = 1; i < rows.length; i++) { // Start from 1 to skip the header row
        const inputs = rows[i].getElementsByTagName('input');
        for (let j = 0; j < inputs.length; j++) {
            fixedLengthText += padString(inputs[j].value, columns[j].length);
        }
        fixedLengthText += '\n';
    }

    if (batch2Trailer[selectedValue]) {
        fixedLengthText += batch2Trailer[selectedValue] + '\n';
    }

    // Create a blob and generate a download link
    const blob = new Blob([fixedLengthText], { type: 'text/plain' });
    const link = document.getElementById('downloadLink');
    link.href = URL.createObjectURL(blob);
    link.download = 'fixed_length_file.txt';
    link.style.display = 'block';
    link.innerText = 'Download Fixed Length File';
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