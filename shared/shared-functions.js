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