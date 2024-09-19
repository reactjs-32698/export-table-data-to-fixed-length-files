import {batch2Columns} from "./constants.js";

export function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}${month}${day}`;
}

// Function to pad string to fixed length
export function padString(str, length) {
    return str.padEnd(length, ' ');
}

// Function to add a new row to the table
export function addRow(data = []) {
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    const comboBox = document.getElementById('comboBox');
    const selectedValue = comboBox.value;
    let columns = batch2Columns.get(selectedValue);

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