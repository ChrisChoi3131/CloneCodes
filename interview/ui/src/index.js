function modifyTableCell(rowIndex, columnIndex, newText) {
  const table = document.getElementById("table")
  const cellElement = table.tBodies[0].rows[`${rowIndex}`].cells[`${columnIndex}`]
  const originalCellValue = cellElement.innerHTML;
  cellElement.innerHTML = newText
  return originalCellValue
}

document.body.innerHTML = `
<table id = "table">
    <tbody>
        <tr>
            <td>Isla</td>
            <td>Leo</td>
            <td>Samuel</td>
        </tr>
        <tr>
            <td>Mia</td>
            <td>Evie</td>
            <td>Freya</td>
        </tr>
        <tr>
            <td>Olivia</td>
            <td>Ava</td>
            <td>George</td>
        </tr>
    </tbody>
</table>`;

console.log(modifyTableCell(0, 1, "Joe"));