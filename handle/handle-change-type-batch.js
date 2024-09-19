import {batch2Columns} from "../shared/constants.js";
import {addRow} from "../shared/shared-functions.js";

export function handleCreateTable() {
    const comboBox = document.getElementById('comboBox');
    const selectedValue = comboBox.value;
    let columns = batch2Columns[selectedValue];
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

// Function to handle combobox change
export function handleComboBoxChange() {
    handleCreateTable();
}