const batch2Header = { // header is optional
    'alsUtilization': 'ALSUTIL',
    'tiUtilization': 'TRUTPUSH',
    'alsClosedAccount': 'ALSUTIL',
    'stimReversal':'CASRUTI',
    'alsSynchronization':'ALPYMT',
    'alsEndorser':'ALSENDO'
};
const batch2Trailer = { // trailer is optional
    'alsUtilization': formatDate(new Date()) + '0000000003000000003150000.00',
    'tiUtilization': formatDate(new Date()) + '0000000003000000003150000.00',
    'alsClosedAccount': formatDate(new Date()) + '0000000003000000003150000.00',
    'alsSynchronization':formatDate(new Date()) + '000000000500500.00',
}
const batch2Separator = {
    'tiSynchronization': '~',
    'tiUtilization': '~'
}
const batch2Columns = {
    '': [
        { name: 'Name', length: 20 },
        { name: 'Age', length: 5 },
        { name: 'City', length: 15 }
    ],
    'alsUtilization': [
        { name: 'res_customer_id', length: 10 },
        { name: 'res_facility_id', length: 14 },
        { name: 'res_loan_acno', length: 26 },
        { name: 'res_tran_status', length: 1 },
        { name: 'res_loan_curr', length: 3 },
        { name: 'res_loan_amt', length: 16 },
        { name: 'res_maker_id', length: 10 },
        { name: 'res_checker_id', length: 10 },
        { name: 'res_earref_no', length: 16 }
    ],
    'tiUtilization': [
        { name: 'res_system_id', length: 5 },
        { name: 'res_customer_id', length: 14, trim: 'both' },
        { name: 'res_facility_id', length: 14 },
        { name: 'res_loan_acno', length: 26 },
        { name: 'res_tran_status', length: 1 },
        { name: 'res_loan_curr', length: 3 },
        { name: 'res_loan_amt', length: 16 },
        { name: 'res_maker_id', length: 10 },
        { name: 'res_checker_id', length: 10 },
        { name: 'res_earref_no', length: 16, null_if_blanks: true, trim: 'both' }
    ],
    'alsClosedAccount': [
        { name: 'res_customer_id', length: 14, trim: 'both' },
        { name: 'res_facility_id', length: 14, trim: 'both' },
        { name: 'res_loan_acno', length: 26 },
        { name: 'res_tran_status', length: 1 },
        { name: 'res_loan_curr', length: 3 },
        { name: 'res_loan_amt', length: 16 },
        { name: 'res_maker_id', length: 10 },
        { name: 'res_checker_id', length: 10 },
        { name: 'res_earref_no', length: 16, null_if_blanks: true, trim: 'both' }
    ],
    'alsEndorser':[
        {'name': 'res_customer_id', 'length': 10},
        {'name': 'res_facility_id', 'length': 14},
        {'name': 'res_loan_acno', 'length': 26},
        {'name': 'res_limit_amt', 'length': 16},
        {'name': 'res_coborrower_cif', 'length': 10},
        {'name': 'currency', 'length': 3}
    ],
    'alsSynchronization':[
        {'name':'customer_id','length':10},
        {'name':'res_facility_id','length':14},
        {'name':'res_loan_acno','length':26},
        {'name':'res_loan_amt','length':16},
        {'name':'res_loan_curr','length':3},
        {'name':'loan_accrual_status','length':2}
    ],
    'stimReversal':[
        {'name':'res_system_id','length':10},
        {'name':'res_customer_id','length':10},
        {'name':'res_bocif_no','length':10},
        {'name':'res_loan_no','length':26},
        {'name':'res_counter_cif','length':10},
        {'name':'res_facility_id','length':14},
        {'name':'res_amount_value','length':15},
        {'name':'res_currency','length':3},
        {'name':'res_tran_date','length':8},
        {'name':'res_unblock_dt','length':8},
        {'name':'res_debit_credit_flg','length':1},
        {'name':'res_facility_cd','length':10},
        {'name':'res_tran_ref_no','length':16},
        {'name':'res_status','length':1},
        {'name':'res_branch','length':20}
    ],
    'tiSynchronization': [
        { name: 'res_system_id', label: 'System ID', default: 'TRADE', type: 'String', length: 5 },
        { name: 'res_customer_id', label: 'Customer ID', type: 'String', length: 14 },
        { name: 'res_facility_id', label: 'Facility ID', type: 'String', length: 14 },
        { name: 'res_loan_acno', label: 'Loan Account Number', type: 'Numeric', length: 26 },
        { name: 'res_prin_amt', label: 'Principal OS', type: 'Numeric', length: 16, sample: '0000000500500.00' },
        { name: '_', length:30, invisible: true, value: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'},
        { name: 'res_currency_cd', label: 'Currency Code', type: 'String', length: 3 },
        { name: 'res_loan_status', length: 2}
    ]
};
function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}${month}${day}`;
}

let columns = batch2Columns[''];

// Function to initialize table header based on columns array
function initializeTable() {
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
function addRow(data = []) {
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
function padString(str, length) {
    return str.padEnd(length, ' ');
}

function convertTableToCSV() {
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
function convertTableToFixedLength() {
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
function handleComboBoxChange() {
    const comboBox = document.getElementById('comboBox');
    const selectedValue = comboBox.value;

    columns = batch2Columns[selectedValue];
    initializeTable();
}

// Initialize the table on page load
window.onload = initializeTable;