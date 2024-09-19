import {convertTableToFixedLength} from "./convert/convert-table-to-fixed-length-file.js";
import {convertTableToCSV} from "./convert/convert-table-to-csv-file.js";
import {addRow} from "./shared/shared-functions.js";
import {initializeSelectBox, initializeTable} from "./shared/init-elements.js";
import {handleComboBoxChange, handleCreateTable} from "./handle/handle-change-type-batch.js";

// Initialize the table on page load
window.onload = initializeTable;

// Initialize the select box on page load
window.onload = initializeSelectBox;

document.getElementById('comboBox').onchange = handleComboBoxChange;
document.getElementById('addRowBtn').onclick = addRow;
document.getElementById('convertFixedLengthBtn').onclick = convertTableToFixedLength;
document.getElementById('convertCSVBtn').onclick = convertTableToCSV;