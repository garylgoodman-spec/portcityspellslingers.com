// EDIT THIS NUMBER after confirming paid/approved vendor reservations.
// Set to null until you have a verified count. Range: 0–40.
const confirmedBookedTables = null;
const capacity = 40;
const remaining = document.getElementById('tables-remaining');
const status = document.getElementById('availability-status');
const progress = document.getElementById('availability-progress');
const fill = document.getElementById('availability-fill');
if (remaining && status && progress && fill) {
  if (Number.isInteger(confirmedBookedTables) && confirmedBookedTables >= 0 && confirmedBookedTables <= capacity) {
    const open = capacity - confirmedBookedTables;
    remaining.textContent = String(open) + ' of ' + capacity;
    status.textContent = open === 0 ? 'All tables currently allocated — ask about the waitlist.' : 'Availability is manually updated and subject to confirmation.';
    progress.setAttribute('aria-valuenow', String(confirmedBookedTables));
    fill.style.width = (confirmedBookedTables / capacity * 100) + '%';
  } else {
    remaining.textContent = 'Contact us';
    status.textContent = 'Current availability has not been published. Please submit a vendor request to check.';
    progress.removeAttribute('role');
    progress.removeAttribute('aria-valuenow');
  }
}
