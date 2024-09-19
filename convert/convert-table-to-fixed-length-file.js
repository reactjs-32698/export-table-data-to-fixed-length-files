// Function to convert table to fixed length file
import {batch2Columns, batch2Header, batch2Separator, batch2Trailer} from "../shared/constants.js";
import {padString} from "../shared/shared-functions.js";

export function convertTableToFixedLength() {

    const comboBox = document.getElementById('comboBox');
    const selectedValue = comboBox.value;
    let columns = batch2Columns.get(selectedValue);

    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tr');
    let fixedLengthText = '';
    if (batch2Header.get(selectedValue)) {
        fixedLengthText += batch2Header.get(selectedValue) + '\n'
    }

    let separator = '';
    if (batch2Separator.get(selectedValue)) {
        separator = batch2Separator.get(selectedValue);
    }

    for (let i = 1; i < rows.length; i++) { // Start from 1 to skip the header row
        const inputs = rows[i].getElementsByTagName('input');
        for (let j = 0; j < inputs.length; j++) {
            fixedLengthText += padString(inputs[j].value, columns[j].length);
            if(j <= inputs.length - 2)
                fixedLengthText += separator;
        }
        fixedLengthText += '\n';
    }

    if (batch2Trailer.get(selectedValue)) {
        fixedLengthText += batch2Trailer.get(selectedValue) + '\n';
    }

    // Create a blob and generate a download link
    const blob = new Blob([fixedLengthText], { type: 'text/plain' });
    const link = document.getElementById('downloadLink');
    link.href = URL.createObjectURL(blob);
    link.download = 'fixed_length_file.txt';
    link.style.display = 'block';
    link.innerText = 'Download Fixed Length File';
}