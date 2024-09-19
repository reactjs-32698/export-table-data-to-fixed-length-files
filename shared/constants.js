import {formatDate} from "./shared-functions.js";

export const SEPARATOR_01 = '~';
export const SEPARATOR_02 = '|';

export const batch2Header = { // header is optional
    'alsUtilization': 'ALSUTIL',
    'tiUtilization': 'TRUTPUSH',
    'alsClosedAccount': 'ALSUTIL',
    'stimReversal':'CASRUTI',
    'alsSynchronization':'ALPYMT',
    'alsEndorser':'ALSENDO'
};
export const batch2Trailer = { // trailer is optional
    'alsUtilization': formatDate(new Date()) + SEPARATOR_01 + '1' + SEPARATOR_01 + '000000000500500.00',
    'tiUtilization': '     ' + SEPARATOR_01 + formatDate(new Date()) + SEPARATOR_01 + '1' + SEPARATOR_01 + '4220.00',
    'alsClosedAccount': formatDate(new Date()) + '0000000003000000003150000.00',
    'alsSynchronization':formatDate(new Date()) + '000000000500500.00',
}
export const batch2Separator = {
    'tiSynchronization': SEPARATOR_01,
    'tiUtilization': SEPARATOR_01,
    'alsUtilization': SEPARATOR_01
}

export const optionsArray = [
    { name: 'Please Select', value: '' },
    { name: 'ALS Utilization', value: 'alsUtilization' },
    { name: 'ALS Closed Account', value: 'alsClosedAccount' },
    { name: 'ALS Endorser Creation', value: 'alsEndorser' },
    { name: 'ALS Synchronization', value: 'alsSynchronization' },
    { name: 'STIM Utilization Reversal', value: 'stimReversal' },
    { name: 'TI Utilization', value: 'tiUtilization' },
    { name: 'TI Synchronization', value: 'tiSynchronization' }
];

export const batch2Columns = {
    '': [
        { name: 'Name', length: 20 },
        { name: 'Age', length: 5 },
        { name: 'City', length: 15 }
    ],
    'alsUtilization': [
        { name: 'res_customer_id', length: 10 },
        { name: 'res_facility_id', length: 14 },
        { name: 'res_loan_acno', length: 26 },
        { name: 'res_tran_status', length: 4 },
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
        { name: 'res_tran_status', length: 4 },
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