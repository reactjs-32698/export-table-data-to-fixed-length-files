export const alsClosedAccountTableConfig = [
    { name: 'res_customer_id', length: 14, trim: 'both' },
    { name: 'res_facility_id', length: 14, trim: 'both' },
    { name: 'res_loan_acno', length: 26 },
    { name: 'res_tran_status', length: 1 },
    { name: 'res_loan_curr', length: 3 },
    { name: 'res_loan_amt', length: 16 },
    { name: 'res_maker_id', length: 10 },
    { name: 'res_checker_id', length: 10 },
    { name: 'res_earref_no', length: 16, null_if_blanks: true, trim: 'both' }
];