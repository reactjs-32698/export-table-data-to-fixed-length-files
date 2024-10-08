import {formatDate} from "./shared-functions.js";
import {alsUtilizationTableConfig} from "../table-configs/als_utilization_table_config.js";
import {tiUtilizationTableConfig} from "../table-configs/ti_utilization_table_config.js";
import {alsClosedAccountTableConfig} from "../table-configs/als_closed_account_table_config.js";
import {alsEndorserTableConfig} from "../table-configs/als_endorser_table_config.js";
import {alsSynchronizationTableConfig} from "../table-configs/als_synchronization_table_config.js";
import {stimReversalTableConfig} from "../table-configs/stim_reversal_table_config.js";
import {tiSynchronizationTableConfig} from "../table-configs/ti_synchronization_table_config.js";

export const SEPARATOR_01 = '~';
export const SEPARATOR_02 = '';
export const TI_UTILIZATION_KEY = "tiUtilization";
export const TI_SYNCHRONIZATION_KEY = "tiSynchronization";
export const ALS_UTILIZATION_KEY = "alsUtilization";
export const ALS_SYNCHRONIZATION_KEY = "alsSynchronization";
export const ALS_CLOSED_ACCOUNT_KEY = "alsClosedAccount";
export const ALS_ENDORSER_KEY = "alsEndorser";
export const STIM_REVERSAL_KEY = "stimReversal";

// config header file
export const batch2Header = new Map();
batch2Header.set(TI_UTILIZATION_KEY, 'TRUTPUSH');
batch2Header.set(TI_SYNCHRONIZATION_KEY, 'TRSYNC');
batch2Header.set(ALS_UTILIZATION_KEY, 'ALSUTIL');
batch2Header.set(ALS_SYNCHRONIZATION_KEY, 'ALPYMT');
batch2Header.set(ALS_CLOSED_ACCOUNT_KEY, 'ALSUTIL');
batch2Header.set(ALS_ENDORSER_KEY, 'ALSENDO');
batch2Header.set(STIM_REVERSAL_KEY, 'CASRUTI');

// config trailer file
export const batch2Trailer = new Map();
batch2Trailer.set(TI_UTILIZATION_KEY, ' '.repeat(5) + SEPARATOR_01 + formatDate(new Date()) + SEPARATOR_01 + '1' + SEPARATOR_01 + '4220.00');
batch2Trailer.set(TI_SYNCHRONIZATION_KEY, ' '.repeat(5) + SEPARATOR_01 + formatDate(new Date()) + SEPARATOR_01 + '1' + SEPARATOR_01 + '4220.00');
batch2Trailer.set(ALS_UTILIZATION_KEY, formatDate(new Date()) + ' '.repeat(2) + SEPARATOR_02 + '1' + ' '.repeat(13) + SEPARATOR_02 + '000000000500500.00');
batch2Trailer.set(ALS_SYNCHRONIZATION_KEY, formatDate(new Date()) + ' '.repeat(2) + SEPARATOR_02 + '1' + ' '.repeat(13) + SEPARATOR_02 + '000000000500500.00');
batch2Trailer.set(ALS_CLOSED_ACCOUNT_KEY, formatDate(new Date()) + ' '.repeat(2) + SEPARATOR_02 + '1' + ' '.repeat(13) + SEPARATOR_02 + '000000000500500.00');
batch2Trailer.set(ALS_ENDORSER_KEY, formatDate(new Date()) + ' '.repeat(2) + SEPARATOR_02 + '1' + ' '.repeat(13) + SEPARATOR_02 + '000000000500500.00');
batch2Trailer.set(STIM_REVERSAL_KEY, formatDate(new Date()) + ' '.repeat(2) + SEPARATOR_02 + '1' + ' '.repeat(9) + SEPARATOR_02 + ' '.repeat(10) + SEPARATOR_02 + '000000000500500.00');

// config separator
export const batch2Separator = new Map();
batch2Separator.set(TI_UTILIZATION_KEY, SEPARATOR_01);
batch2Separator.set(TI_SYNCHRONIZATION_KEY, SEPARATOR_01);
batch2Separator.set(ALS_UTILIZATION_KEY, SEPARATOR_02);
batch2Separator.set(ALS_SYNCHRONIZATION_KEY, SEPARATOR_02);
batch2Separator.set(ALS_CLOSED_ACCOUNT_KEY, SEPARATOR_02);
batch2Separator.set(ALS_ENDORSER_KEY, SEPARATOR_02);
batch2Separator.set(STIM_REVERSAL_KEY, SEPARATOR_02);

// config columns
export const batch2Columns = new Map();
batch2Columns.set('', [
    { name: 'Name', length: 20 },
    { name: 'Age', length: 5 },
    { name: 'City', length: 15 }
]);
batch2Columns.set(TI_UTILIZATION_KEY, tiUtilizationTableConfig);
batch2Columns.set(TI_SYNCHRONIZATION_KEY, tiSynchronizationTableConfig);
batch2Columns.set(ALS_UTILIZATION_KEY, alsUtilizationTableConfig);
batch2Columns.set(ALS_SYNCHRONIZATION_KEY, alsSynchronizationTableConfig);
batch2Columns.set(ALS_CLOSED_ACCOUNT_KEY, alsClosedAccountTableConfig);
batch2Columns.set(ALS_ENDORSER_KEY, alsEndorserTableConfig);
batch2Columns.set(STIM_REVERSAL_KEY, stimReversalTableConfig);

// config select options
export const optionsArray = [
    { name: 'Please Select', value: '' },
    { name: 'TI Utilization', value: TI_UTILIZATION_KEY },
    { name: 'TI Synchronization', value: TI_SYNCHRONIZATION_KEY },
    { name: 'ALS Utilization', value: ALS_UTILIZATION_KEY },
    { name: 'ALS Synchronization', value: ALS_SYNCHRONIZATION_KEY },
    { name: 'ALS Closed Account', value: ALS_CLOSED_ACCOUNT_KEY },
    { name: 'ALS Endorser Creation', value: ALS_ENDORSER_KEY },
    { name: 'STIM Utilization Reversal', value: STIM_REVERSAL_KEY }

];