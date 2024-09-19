export const tiSynchronizationTableConfig = [
    { name: 'res_system_id', label: 'System ID', default: 'TRADE', type: 'String', length: 5 },
    { name: 'res_customer_id', label: 'Customer ID', type: 'String', length: 14 },
    { name: 'res_facility_id', label: 'Facility ID', type: 'String', length: 14 },
    { name: 'res_loan_acno', label: 'Loan Account Number', type: 'Numeric', length: 26 },
    { name: 'res_prin_amt', label: 'Principal OS', type: 'Numeric', length: 16, sample: '0000000500500.00' },
    // { name: '_', length:30, invisible: true, value: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'},
    { name: 'res_currency_cd', label: 'Currency Code', type: 'String', length: 3 },
    { name: 'res_loan_status', length: 2}
];