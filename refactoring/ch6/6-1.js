export function printOwing(invoice) {
  let outputInvoice = { ...invoice }
  let outstanding = 0;
  printOutputHeader();
  outstanding = calculateOutstanding(outputInvoice)
  outputInvoice.dueDate = getDueDateToLocalString(30);
  printContents(outputInvoice, outstanding);
}
const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);

function calculateOutstanding(outputInvoice) {
  return outputInvoice.orders.reduce((p, c) => p.amount + c.amount);
}

function printContents(outputInvoice, outstanding) {
  console.log(`name: ${outputInvoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${outputInvoice.dueDate}`);
}

function printOutputHeader() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function getDueDate(targetDate) {
  const today = new Date();
  const dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + `${targetDate}`
  )
  return dueDate
}
function getDueDateToLocalString(targetDate) {
  const dueDate = getDueDate(targetDate)
  return dueDate.toLocaleDateString()
}

