import {batch2Header, batch2Separator, batch2Trailer} from "../shared/constants.js";

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